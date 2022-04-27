/**
  * Client for sending requests to Recombee and getting replies
  */
export class ApiClient {
    /**
     * Construct the client
     * @param {string} databaseId - ID of your database
     * @param {string} publicToken - Corresponding public token
     * @param {Object} options - Other custom options
     */
    constructor(databaseId: string, publicToken: string, options: any);
    databaseId: string;
    publicToken: string;
    options: any;
    baseUri: any;
    useHttps: any;
    async: any;
    _getRegionalBaseUri(region: any): any;
    _getBaseUri(): any;
    /**
     * Send the request to Recombee
     * @param {Request} request - Request to be sent
     * @param {Object} callback - Optional callback (send returns Promise if omitted)
     */
    send(request: Request, callback: any): any;
    _signUrl(req_part: any): string;
}
//# sourceMappingURL=api-client.d.ts.map