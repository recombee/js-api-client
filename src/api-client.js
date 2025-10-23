'use strict';

const jsSHA = require('jssha');
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
  constructor(databaseId, publicToken, options) {
    this.databaseId = databaseId;
    this.publicToken = publicToken;
    this.options = options || {};
    this.baseUri = this.getBaseUri();
    this.useHttps = 'useHttps' in this.options ? this.options.useHttps : true;
  }

  _getRegionalBaseUri(region) {
    const uri = {
      'ap-se': 'client-rapi-ap-se.recombee.com',
      'ca-east': 'client-rapi-ca-east.recombee.com',
      'eu-west': 'client-rapi-eu-west.recombee.com',
      'us-west': 'client-rapi-us-west.recombee.com',
    }[region.toLowerCase()];

    if (uri === undefined) {
      throw new Error(
        `Region "${region}" is unknown. You may need to update the version of the SDK.`,
      );
    }

    return uri;
  }

  getBaseUri() {
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
    if (!(typeof globalThis === 'undefined' ? window.Promise : globalThis.Promise)) {
      throw new Error('Recombee API Client requires Promises to be available.');
    }
    if (callback === undefined) {
      return this._sendFetch(request);
    } else {
      return this._sendFetch(request)
        .then((result) => callback(null, result))
        .catch(callback);
    }
  }

  async _sendFetch(request) {
    const url = this._getUrl(request);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.bodyParameters()),
        signal: AbortSignal.timeout(request.timeout),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new api_errors.ResponseError(request, response.status, await response.text());
      }
    } catch (err) {
      if (err.name === 'TimeoutError') {
        throw new api_errors.TimeoutError(request);
      } else {
        throw err;
      }
    }
  }

  _getUrl(request) {
    const signedUrl = this._signUrl(request.path);
    const url =
      (this.useHttps || request.ensureHttps ? 'https://' : 'http://') + this.baseUri + signedUrl;
    return url;
  }

  _signUrl(req_part) {
    let url = '/' + this.databaseId + req_part;
    url +=
      (req_part.indexOf('?') == -1 ? '?' : '&') +
      'frontend_timestamp=' +
      parseInt(new Date().getTime() / 1000);

    const shaObj = new jsSHA('SHA-1', 'TEXT');
    shaObj.setHMACKey(this.publicToken, 'TEXT');
    shaObj.update(url);

    url += '&frontend_sign=' + shaObj.getHMAC('HEX');
    return url;
  }
}

exports.ApiClient = ApiClient;
