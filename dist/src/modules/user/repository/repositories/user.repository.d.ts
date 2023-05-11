import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { UserDoc, UserEntity } from 'src/modules/user/repository/entities/user.entity';
export declare class UserRepository extends DatabaseMongoUUIDRepositoryAbstract<UserEntity, UserDoc> {
    private readonly userModel;
    constructor(userModel: Model<UserEntity>);
}
