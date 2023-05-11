import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { ENUM_SETTING_DATA_TYPE } from 'src/common/setting/constants/setting.enum.constant';
export declare class SettingGetSerialization extends ResponseIdSerialization {
    readonly name: string;
    readonly description?: string;
    readonly type: ENUM_SETTING_DATA_TYPE;
    readonly value: string | number | boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
