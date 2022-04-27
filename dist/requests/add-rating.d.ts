/**
 * Adds a rating of given item made by a given user.
 */
export class AddRating extends rqs.Request {
    userId: string;
    itemId: string;
    rating: number;
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
//# sourceMappingURL=add-rating.d.ts.map