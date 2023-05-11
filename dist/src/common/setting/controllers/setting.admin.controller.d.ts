import { IResponse } from 'src/common/response/interfaces/response.interface';
import { SettingUpdateValueDto } from 'src/common/setting/dtos/setting.update-value.dto';
import { SettingDoc } from 'src/common/setting/repository/entities/setting.entity';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class SettingAdminController {
    private readonly settingService;
    constructor(settingService: SettingService);
    update(setting: SettingDoc, body: SettingUpdateValueDto): Promise<IResponse>;
}
