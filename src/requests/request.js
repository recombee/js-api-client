'use strict';

/**
 * Base class for all the requests
 */
class Request {
  
  /**
   * Construct the basis of request
   * @param {string} method - GET/PUT/POST/DELETE
   * @param {string} path - Path to the endpoint
   * @param {number} timeout - Timeout in milliseconds
   */
  constructor(method, path, timeout, ensureHttps) {
    this.method = method;
    this.path = path;
    this.timeout = timeout;
  }
}

exports.Request = Request