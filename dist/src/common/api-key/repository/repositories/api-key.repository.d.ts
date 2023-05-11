import { Model } from 'mongoose';
import { ApiKeyEntity, ApiKeyDoc } from 'src/common/api-key/repository/entities/api-key.entity';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
export declare class ApiKeyRepository extends DatabaseMongoUUIDRepositoryAbstract<ApiKeyEntity, ApiKeyDoc> {
    private readonly ApiKeyDoc;
    constructor(ApiKeyDoc: Model<ApiKeyEntity>);
}
