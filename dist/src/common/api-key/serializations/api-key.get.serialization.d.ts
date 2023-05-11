import { ENUM_API_KEY_TYPE } from 'src/common/api-key/constants/api-key.enum.constant';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
export declare class ApiKeyGetSerialization extends ResponseIdSerialization {
    name: string;
    type: ENUM_API_KEY_TYPE;
    key: string;
    hash: string;
    isActive: boolean;
    startDate?: Date;
    endDate?: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
