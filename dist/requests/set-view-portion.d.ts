/**
 * Sets viewed portion of an item (for example a video or article) by a user (at a session).
 * If you send new request with the same (`userId`, `itemId`, `sessionId`), the portion gets updated.
 */
export class SetViewPortion extends rqs.Request {
    userId: string;
    itemId: string;
    portion: number;
    sessionId: any;
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
//# sourceMappingURL=set-view-portion.d.ts.map