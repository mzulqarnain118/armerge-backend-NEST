import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { SettingEntity } from 'src/common/setting/repository/entities/setting.entity';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class SettingPublicController {
    private readonly settingService;
    private readonly paginationService;
    constructor(settingService: SettingService, paginationService: PaginationService);
    list({ _search, _limit, _offset, _order }: PaginationListDto): Promise<IResponsePaging>;
    get(setting: SettingEntity): Promise<IResponse>;
}
