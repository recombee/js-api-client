'use strict';
const rqs = require('./request');

const sum_timeouts = (requests) => {
  return requests.map((r) => r.timeout).reduce((a, b) => a + b, 0);
};

/**
 * Batch processing allows you to submit any sequence of requests within a single HTTPS request.
 *
 * Any type of request from this SDK may be used in the Batch, and the Batch may combine different types of requests arbitrarily as well.
 *
 * Using Batch requests can be beneficial in situations such as synchronizing the catalog of items or uploading historical interaction data,
 * as sending the data in Batch is considerably faster than sending the individual requests (thanks to optimizations and reducing network and HTTPS overhead).
 *
 * @note The status code of the batch request itself is 200 even if the individual requests result in an error – you have to inspect the code values in the resulting array.
 */
class Batch extends rqs.Request {
  /**
   * Construct the request
   * @param {Request[]} requests - Array containing the requests.
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *distinctRecomms*
   *         - Type: boolean
   *         - Description: Makes all the recommended items for a certain user distinct among multiple recommendation requests in the batch.
   */
  constructor(requests, optional) {
    super('POST', '/batch/', sum_timeouts(requests), true);
    this.requests = requests;
    optional = optional || {};
    this.distinctRecomms = optional.distinctRecomms;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    const reqs = this.requests.map((r) => this._request_to_batch_object(r));
    const result = { requests: reqs };

    if (this.distinctRecomms !== undefined) result.distinctRecomms = this.distinctRecomms;

    return result;
  }

  _request_to_batch_object(req) {
    const bodyParameters = req.bodyParameters();
    return {
      method: req.method,
      path: req.path,
      params: Object.keys(bodyParameters).length ? bodyParameters : undefined,
    };
  }
}

exports.Batch = Batch;
