import { SettingService } from 'src/common/setting/services/setting.service';
export declare class MigrationSettingSeed {
    private readonly settingService;
    constructor(settingService: SettingService);
    seeds(): Promise<void>;
    remove(): Promise<void>;
}
