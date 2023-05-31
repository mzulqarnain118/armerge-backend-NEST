import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DATABASE_CONNECTION_NAME } from '~common/database/constants/database.constant';
import { StoreRepository } from './store.repository';
import { StoreEntity, StoreSchema } from '../entities/store.entity';

@Module({
    providers: [StoreRepository],
    exports: [StoreRepository],
    imports: [
        MongooseModule.forFeature(
            [{ name: StoreEntity.name, schema: StoreSchema }],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class StoreRepositoryModule {}
