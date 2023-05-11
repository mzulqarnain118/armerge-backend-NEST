import { ENUM_SETTING_DATA_TYPE } from 'src/common/setting/constants/setting.enum.constant';
export declare class SettingCreateDto {
    readonly name: string;
    readonly description?: string;
    readonly type: ENUM_SETTING_DATA_TYPE;
    readonly value: string;
}
