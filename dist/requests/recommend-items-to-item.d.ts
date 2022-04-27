/**
 * Recommends set of items that are somehow related to one given item, *X*. Typical scenario  is when user *A* is viewing *X*. Then you may display items to the user that he might be also interested in. Recommend items to item request gives you Top-N such items, optionally taking the target user *A* into account.
 * The returned items are sorted by relevance (first item being the most relevant).
 * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
 * - Let Recombee know that this recommendation was successful (e.g. user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
 * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
export class RecommendItemsToItem extends rqs.Request {
    itemId: string;
    targetUserId: string;
    count: number;
    scenario: any;
    cascadeCreate: any;
    returnProperties: any;
    includedProperties: any;
    filter: any;
    booster: any;
    logic: any;
    userImpact: any;
    diversity: any;
    minRelevance: any;
    rotationRate: any;
    rotationTime: any;
    expertSettings: any;
    returnAbGroup: any;
    /**
     * Get body parameters
     * @return {Object} The values of body parameters (name of parameter: value of the parameter)
     */
    bodyParameters(): any;
}
import rqs = require("./request");
//# sourceMappingURL=recommend-items-to-item.d.ts.map