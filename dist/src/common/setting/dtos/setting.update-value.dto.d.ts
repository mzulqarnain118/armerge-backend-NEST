import { SettingCreateDto } from './setting.create.dto';
declare const SettingUpdateValueDto_base: import("@nestjs/common").Type<Omit<SettingCreateDto, "name" | "description">>;
export declare class SettingUpdateValueDto extends SettingUpdateValueDto_base {
}
export {};
