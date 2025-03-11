/*
 This file is auto-generated, do not edit
*/

'use strict';
const rqs = require('./request');

/**
 * Adds a bookmark of the given item made by the given user.
 */
class AddBookmark extends rqs.Request {
  /**
   * Construct the request
   * @param {string} userId - User who bookmarked the item
   * @param {string} itemId - Bookmarked item
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the bookmark as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this bookmark is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  constructor(userId, itemId, optional) {
    super('POST', '/bookmarks/', 9000, false);
    this.userId = userId;
    this.itemId = itemId;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    const params = {};
    params.userId = this.userId;
    params.itemId = this.itemId;

    if (this.timestamp !== undefined) params.timestamp = this.timestamp;

    if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;

    if (this.recommId !== undefined) params.recommId = this.recommId;

    if (this.additionalData !== undefined) params.additionalData = this.additionalData;

    params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
    return params;
  }
}

exports.AddBookmark = AddBookmark;
