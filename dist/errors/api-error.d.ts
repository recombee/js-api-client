/**
 * Base class for errors that occur because of errors in requests reported by API or because of a timeout
 */
export class ApiError extends Error {
    constructor(message: any);
    name: any;
    stack: string;
}
//# sourceMappingURL=api-error.d.ts.map