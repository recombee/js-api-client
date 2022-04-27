/**
 * Error thrown when a request is not processed within the timeout
 */
export class TimeoutError extends ae.ApiError {
    /**
     * Create the exception
     * @param {Request} request - Request which caused the exception
     */
    constructor(request: Request);
    request: Request;
}
import ae = require("./api-error");
//# sourceMappingURL=timeout-error.d.ts.map