/*
 This file is auto-generated, do not edit
*/

'use strict';
const rqs = require("./request");

/**
 * Adds a purchase of the given item made by the given user.
 */
class AddPurchase extends rqs.Request {

  /**
   * Construct the request
   * @param {string} userId - User who purchased the item
   * @param {string} itemId - Purchased item
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the purchase as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *amount*
   *         - Type: number
   *         - Description: Amount (number) of purchased items. The default is 1. For example, if `user-x` purchases two `item-y` during a single order (session...), the `amount` should equal 2.
   *     - *price*
   *         - Type: number
   *         - Description: Price paid by the user for the item. If `amount` is greater than 1, the sum of prices of all the items should be given.
   *     - *profit*
   *         - Type: number
   *         - Description: Your profit from the purchased item. The profit is natural in the e-commerce domain (for example, if `user-x` purchases `item-y` for $100 and the gross margin is 30 %, then the profit is $30) but is also applicable in other domains (for example, at a news company it may be income from a displayed advertisement on article page). If `amount` is greater than 1, the sum of profit of all the items should be given.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this purchase is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  constructor(userId, itemId, optional) {
    super('POST', '/purchases/', 9000, false);
    this.userId = userId;
    this.itemId = itemId;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.amount = optional.amount;
    this.price = optional.price;
    this.profit = optional.profit;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
    params.userId = this.userId;
    params.itemId = this.itemId;

    if(this.timestamp !== undefined)
      params.timestamp = this.timestamp;

    if(this.cascadeCreate !== undefined)
      params.cascadeCreate = this.cascadeCreate;

    if(this.amount !== undefined)
      params.amount = this.amount;

    if(this.price !== undefined)
      params.price = this.price;

    if(this.profit !== undefined)
      params.profit = this.profit;

    if(this.recommId !== undefined)
      params.recommId = this.recommId;

    if(this.additionalData !== undefined)
      params.additionalData = this.additionalData;

    params.cascadeCreate = (this.cascadeCreate !== undefined) ? this.cascadeCreate : true;
    return params;
  }

}

exports.AddPurchase = AddPurchase
