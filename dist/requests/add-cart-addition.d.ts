/**
 * Adds a cart addition of a given item made by a given user.
 */
export class AddCartAddition extends rqs.Request {
    /**
     * Construct the request
     * @param {string} userId - User who added the item to the cart
     * @param {string} itemId - Item added to the cart
     * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
     * - Allowed parameters:
     *     - *timestamp*
     *         - Type: string|number
     *         - Description: UTC timestamp of the cart addition as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
     *     - *cascadeCreate*
     *         - Type: boolean
     *         - Description: Sets whether the given user/item should be created if not present in the database.
     *     - *amount*
     *         - Type: number
     *         - Description: Amount (number) added to cart. The default is 1. For example if `user-x` adds two `item-y` during a single order (session...), the `amount` should equal to 2.
     *     - *price*
     *         - Type: number
     *         - Description: Price of the added item. If `amount` is greater than 1, sum of prices of all the items should be given.
     *     - *recommId*
     *         - Type: string
     *         - Description: If this cart addition is based on a recommendation request, `recommId` is the id of the clicked recommendation.
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
    recommId: any;
    additionalData: any;
    /**
     * Get body parameters
     * @return {Object} The values of body parameters (name of parameter: value of the parameter)
     */
    bodyParameters(): any;
}
import rqs = require("./request");
//# sourceMappingURL=add-cart-addition.d.ts.map