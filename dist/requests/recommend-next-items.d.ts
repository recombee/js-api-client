/**
 * Returns items that shall be shown to a user as next recommendations when the user e.g. scrolls the page down (*infinite scroll*) or goes to a next page.
 * It accepts `recommId` of a base recommendation request (e.g. request from the first page) and number of items that shall be returned (`count`).
 * The base request can be one of:
 *   - [Recommend items to item](https://docs.recombee.com/api.html#recommend-items-to-item)
 *   - [Recommend items to user](https://docs.recombee.com/api.html#recommend-items-to-user)
 *   - [Search items](https://docs.recombee.com/api.html#search-items)
 * All the other parameters are inherited from the base request.
 * *Recommend next items* can be called many times for a single `recommId` and each call returns different (previously not recommended) items.
 * The number of *Recommend next items* calls performed so far is returned in the `numberNextRecommsCalls` field.
 * *Recommend next items* can be requested up to 30 minutes after the base request or a previous *Recommend next items* call.
 * For billing purposes, each call to *Recommend next items* is counted as a separate recommendation request.
 */
export class RecommendNextItems extends rqs.Request {
    /**
     * Construct the request
     * @param {string} recommId - ID of the base recommendation request for which next recommendations should be returned
     * @param {number} count - Number of items to be recommended
     */
    constructor(recommId: string, count: number);
    recommId: string;
    count: number;
    /**
     * Get body parameters
     * @return {Object} The values of body parameters (name of parameter: value of the parameter)
     */
    bodyParameters(): any;
}
import rqs = require("./request");
//# sourceMappingURL=recommend-next-items.d.ts.map