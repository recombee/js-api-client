/**
 * Error thrown when a request did not succeed (did not return 200 or 201)
 */
export class ResponseError extends ae.ApiError {
    /**
     * Create the exception
     * @param {Request} request - Request which caused the exception
     * @param {number} statusCode - The returned status code
     * @param {string} message - Error message from the API
     */
    constructor(request: Request, statusCode: number, message: string);
    request: Request;
    statusCode: number;
}
import ae = require("./api-error");
//# sourceMappingURL=response-error.d.ts.map