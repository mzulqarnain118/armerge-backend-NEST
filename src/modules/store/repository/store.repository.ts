import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from '~common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from '~common/database/decorators/database.decorator';
import { UserEntity } from '~modules/user/repository/entities/user.entity';
import { StoreDoc, StoreEntity } from '../entities/store.entity';

@Injectable()
export class StoreRepository extends DatabaseMongoUUIDRepositoryAbstract<
    StoreEntity,
    StoreDoc
> {
    constructor(
        @DatabaseModel(StoreEntity.name)
        private readonly storeModel: Model<StoreEntity>
    ) {
        super(storeModel, [
            {
                path: 'users',
                localField: 'owner',
                foreignField: '_id',
                model: UserEntity.name,
            },
            {
                path: 'users',
                localField: 'team.user',
                foreignField: '_id',
                model: UserEntity.name,
            },
        ]);
    }
}
