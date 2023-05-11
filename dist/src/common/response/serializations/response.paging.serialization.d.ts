import { RequestPaginationSerialization } from 'src/common/request/serializations/request.pagination.serialization';
import { ResponseDefaultSerialization, ResponseMetadataSerialization } from 'src/common/response/serializations/response.default.serialization';
export declare class ResponsePaginationCursorSerialization {
    nextPage: string;
    previousPage: string;
    firstPage: string;
    lastPage: string;
}
export declare class ResponsePaginationSerialization extends RequestPaginationSerialization {
    total: number;
    totalPage: number;
}
export interface ResponsePagingMetadataSerialization extends ResponseMetadataSerialization {
    cursor?: ResponsePaginationCursorSerialization;
    pagination?: ResponsePaginationSerialization;
}
declare const ResponsePagingSerialization_base: import("@nestjs/common").Type<Pick<ResponseDefaultSerialization<unknown>, "statusCode" | "message">>;
export declare class ResponsePagingSerialization<T = Record<string, any>> extends ResponsePagingSerialization_base {
    readonly _metadata: ResponsePagingMetadataSerialization;
    readonly data: T[];
}
export {};
