/**
 * Adds a bookmark of a given item made by a given user.
 */
export class AddBookmark extends rqs.Request {
    /**
     * Construct the request
     * @param {string} userId - User who bookmarked the item
     * @param {string} itemId - Bookmarked item
     * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
     * - Allowed parameters:
     *     - *timestamp*
     *         - Type: string|number
     *         - Description: UTC timestamp of the bookmark as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
     *     - *cascadeCreate*
     *         - Type: boolean
     *         - Description: Sets whether the given user/item should be created if not present in the database.
     *     - *recommId*
     *         - Type: string
     *         - Description: If this bookmark is based on a recommendation request, `recommId` is the id of the clicked recommendation.
     *     - *additionalData*
     *         - Type:
     *         - Description: A dictionary of additional data for the interaction.
     */
    constructor(userId: string, itemId: string, optional: any);
    userId: string;
    itemId: string;
    timestamp: any;
    cascadeCreate: any;
    recommId: any;
    additionalData: any;
    /**
     * Get body parameters
     * @return {Object} The values of body parameters (name of parameter: value of the parameter)
     */
    bodyParameters(): any;
}
import rqs = require("./request");
//# sourceMappingURL=add-bookmark.d.ts.map