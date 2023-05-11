import { ApiKeyService } from 'src/common/api-key/services/api-key.service';
export declare class MigrationApiKeySeed {
    private readonly apiKeyService;
    constructor(apiKeyService: ApiKeyService);
    seeds(): Promise<void>;
    remove(): Promise<void>;
}
