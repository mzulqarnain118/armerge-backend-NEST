import { ENUM_API_KEY_TYPE } from 'src/common/api-key/constants/api-key.enum.constant';
import { ApiKeyUpdateDateDto } from 'src/common/api-key/dtos/api-key.update-date.dto';
declare const ApiKeyCreateDto_base: import("@nestjs/common").Type<Partial<ApiKeyUpdateDateDto>>;
export declare class ApiKeyCreateDto extends ApiKeyCreateDto_base {
    name: string;
    type: ENUM_API_KEY_TYPE;
}
export declare class ApiKeyCreateRawDto extends ApiKeyCreateDto {
    key: string;
    secret: string;
}
export {};
