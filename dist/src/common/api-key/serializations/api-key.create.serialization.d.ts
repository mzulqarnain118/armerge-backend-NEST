import { ApiKeyGetSerialization } from 'src/common/api-key/serializations/api-key.get.serialization';
declare const ApiKeyCreateSerialization_base: import("@nestjs/common").Type<Pick<ApiKeyGetSerialization, "_id" | "key">>;
export declare class ApiKeyCreateSerialization extends ApiKeyCreateSerialization_base {
    secret: string;
}
export {};
