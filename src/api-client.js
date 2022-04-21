'use strict';

const jsSHA = require("jssha");
const api_errors = require('./errors');

/**
  * Client for sending requests to Recombee and getting replies
  */
class ApiClient {

  /**
   * Construct the client
   * @param {string} databaseId - ID of your database
   * @param {string} publicToken - Corresponding public token
   * @param {Object} options - Other custom options
   */
  constructor (databaseId, publicToken, options) {
      this.databaseId = databaseId;
      this.publicToken = publicToken;
      this.options = options || {};
      this.baseUri = this._getBaseUri()
      this.useHttps = ('useHttps' in this.options) ? this.options.useHttps : true;
      this.async = ('async' in this.options) ? this.options.async : true;
  }


  _getRegionalBaseUri(region) {
    const uri = {
      'ap-se': 'client-rapi-ap-se.recombee.com',
      'ca-east': 'client-rapi-ca-east.recombee.com',
      'eu-west': 'client-rapi-eu-west.recombee.com',
      'us-west': 'client-rapi-us-west.recombee.com'
    }[region.toLowerCase()];

    if (uri === undefined) {
      throw new Error(`Region "${region}" is unknown. You may need to update the version of the SDK.`)
    }

    return uri;
  }

  _getBaseUri() {
    let baseUri = this.options.baseUri;
    if (this.options.region) {
      if (baseUri) {
        throw new Error('baseUri and region cannot be specified at the same time');
      }
      baseUri = this._getRegionalBaseUri(this.options.region);
    }
    return baseUri || 'client-rapi.recombee.com';
  }

  /**
   * Send the request to Recombee
   * @param {Request} request - Request to be sent
   * @param {Object} callback - Optional callback (send returns Promise if omitted) 
   */
  send(request, callback) {
    var self = this;
    if ( callback === undefined && window.Promise ) {
      return new Promise(function (resolve, reject) {
        self.send(request, function (err, result) {
          err ? reject(err) : resolve(result)
        })
      })
    }

    var signedUrl = this._signUrl(request.path);
    var url = ((this.useHttps) ? 'https://' : 'http://') + this.baseUri + signedUrl;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, this.async);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("Content-Type", "text/plain");

    if ( this.async )
      xmlhttp.timeout = request.timeout;

    xmlhttp.onreadystatechange = function() {
      if ( this.readyState == 4 ) {
        if ( this.responseText )  {
          if ( this.status == 200 ) {
            if ( callback )
              return callback(null, JSON.parse(this.responseText));
          }
          else {
            if ( callback )
              return callback(new api_errors.ResponseError(request, this.status, this.responseText));
          }
        }
      }
    }
    xmlhttp.ontimeout = function () {
      if ( callback )
        return callback(new api_errors.TimeoutError(request));
    };

    xmlhttp.send(JSON.stringify(request.bodyParameters()));
  }

  _signUrl (req_part) {
    let url = '/' + this.databaseId + req_part;
    url += (req_part.indexOf("?") == -1 ? "?" : "&" ) + "frontend_timestamp=" + parseInt(new Date().getTime() / 1000);
    
    let shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(this.publicToken, "TEXT");
    shaObj.update(url);

    url += "&frontend_sign=" + shaObj.getHMAC("HEX");
    return url;
  }
}

exports.ApiClient = ApiClient