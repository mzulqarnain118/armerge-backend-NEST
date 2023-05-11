import { IResponseOptions, IResponsePagingOptions, IResponseExcelOptions } from 'src/common/response/interfaces/response.interface';
export declare function Response<T>(messagePath: string, options?: IResponseOptions<T>): MethodDecorator;
export declare function ResponseExcel(options?: IResponseExcelOptions<void>): MethodDecorator;
export declare function ResponsePaging<T>(messagePath: string, options?: IResponsePagingOptions<T>): MethodDecorator;
export declare const ResponseSerializationOptions: (options: import("@nestjs/common").ClassSerializerContextOptions) => import("@nestjs/common").CustomDecorator<string>;
