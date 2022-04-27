/**
 * Adds a purchase of a given item made by a given user.
 */
export class AddPurchase extends rqs.Request {
    /**
     * Construct the request
     * @param {string} userId - User who purchased the item
     * @param {string} itemId - Purchased item
     * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
     * - Allowed parameters:
     *     - *timestamp*
     *         - Type: string|number
     *         - Description: UTC timestamp of the purchase as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
     *     - *cascadeCreate*
     *         - Type: boolean
     *         - Description: Sets whether the given user/item should be created if not present in the database.
     *     - *amount*
     *         - Type: number
     *         - Description: Amount (number) of purchased items. The default is 1. For example if `user-x` purchases two `item-y` during a single order (session...), the `amount` should equal to 2.
     *     - *price*
     *         - Type: number
     *         - Description: Price paid by the user for the item. If `amount` is greater than 1, sum of prices of all the items should be given.
     *     - *profit*
     *         - Type: number
     *         - Description: Your profit from the purchased item. The profit is natural in e-commerce domain (for example if `user-x` purchases `item-y` for $100 and the gross margin is 30 %, then the profit is $30), but is applicable also in other domains (for example at a news company it may be income from displayed advertisement on article page). If `amount` is greater than 1, sum of profit of all the items should be given.
     *     - *recommId*
     *         - Type: string
     *         - Description: If this purchase is based on a recommendation request, `recommId` is the id of the clicked recommendation.
     *     - *additionalData*
     *         - Type:
     *         - Description: A dictionary of additional data for the interaction.
     */
    constructor(userId: string, itemId: string, optional: any);
    userId: string;
    itemId: string;
    timestamp: any;
    cascadeCreate: any;
    amount: any;
    price: any;
    profit: any;
    recommId: any;
    additionalData: any;
    /**
     * Get body parameters
     * @return {Object} The values of body parameters (name of parameter: value of the parameter)
     */
    bodyParameters(): any;
}
import rqs = require("./request");
//# sourceMappingURL=add-purchase.d.ts.map