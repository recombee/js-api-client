/**
 * Base class for all the requests
 */
export class Request {
    /**
     * Construct the basis of request
     * @param {string} method - GET/PUT/POST/DELETE
     * @param {string} path - Path to the endpoint
     * @param {number} timeout - Timeout in milliseconds
     */
    constructor(method: string, path: string, timeout: number, ensureHttps: any);
    method: string;
    path: string;
    timeout: number;
}
//# sourceMappingURL=request.d.ts.map