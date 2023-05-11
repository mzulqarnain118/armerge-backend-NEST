import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class SettingPutToRequestGuard implements CanActivate {
    private readonly settingService;
    constructor(settingService: SettingService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
