import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class SettingMaintenanceMiddleware implements NestMiddleware {
    private readonly settingService;
    constructor(settingService: SettingService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
