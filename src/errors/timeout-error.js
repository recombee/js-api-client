'use strict';
const ae = require('./api-error');

/**
 * Error thrown when a request is not processed within the timeout
 */
class TimeoutError extends ae.ApiError {
  /**
   * Create the exception
   * @param {Request} request - Request which caused the exception
   */
  constructor(request) {
    super(`Client did not get response within ${request.timeout} ms`);
    this.request = request;
  }
}

exports.TimeoutError = TimeoutError;
