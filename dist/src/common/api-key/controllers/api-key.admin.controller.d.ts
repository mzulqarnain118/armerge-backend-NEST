import { ApiKeyCreateDto } from 'src/common/api-key/dtos/api-key.create.dto';
import { ApiKeyUpdateDateDto } from 'src/common/api-key/dtos/api-key.update-date.dto';
import { ApiKeyUpdateDto } from 'src/common/api-key/dtos/api-key.update.dto';
import { ApiKeyDoc, ApiKeyEntity } from 'src/common/api-key/repository/entities/api-key.entity';
import { ApiKeyService } from 'src/common/api-key/services/api-key.service';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
export declare class ApiKeyAdminController {
    private readonly apiKeyService;
    private readonly paginationService;
    constructor(apiKeyService: ApiKeyService, paginationService: PaginationService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, isActive: Record<string, any>, type: Record<string, any>): Promise<IResponsePaging>;
    get(apiKey: ApiKeyEntity): Promise<IResponse>;
    create(body: ApiKeyCreateDto): Promise<IResponse>;
    reset(apiKey: ApiKeyDoc): Promise<IResponse>;
    updateName(body: ApiKeyUpdateDto, apiKey: ApiKeyDoc): Promise<IResponse>;
    inactive(apiKey: ApiKeyDoc): Promise<void>;
    active(apiKey: ApiKeyDoc): Promise<void>;
    updateDate(body: ApiKeyUpdateDateDto, apiKey: ApiKeyDoc): Promise<IResponse>;
    delete(apiKey: ApiKeyDoc): Promise<void>;
}
