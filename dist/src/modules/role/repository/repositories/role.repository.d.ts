import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { RoleDoc, RoleEntity } from 'src/modules/role/repository/entities/role.entity';
export declare class RoleRepository extends DatabaseMongoUUIDRepositoryAbstract<RoleEntity, RoleDoc> {
    private readonly roleModel;
    constructor(roleModel: Model<RoleEntity>);
}
