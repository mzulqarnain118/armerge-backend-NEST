import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { DatabaseMongoUUIDEntityAbstract } from '~common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from '~common/database/decorators/database.decorator';
import { UserEntity } from '~modules/user/repository/entities/user.entity';

import {
    TEAM_MEMBER_ROLE,
    TEAM_MEMBER_STATUS,
    TEAM_MEMBER_TYPE,
    PLATFORMS,
} from '../store.constants';

export const StoreDatabaseName = 'stores';

@DatabaseEntity()
class TeamMember {
    @Prop()
    status: TEAM_MEMBER_STATUS;

    @Prop({ default: TEAM_MEMBER_ROLE.MEMBER })
    role: TEAM_MEMBER_ROLE;

    @Prop()
    type: TEAM_MEMBER_TYPE;

    @Prop({ required: true, ref: UserEntity.name })
    user: string;
}

@DatabaseEntity({ collection: StoreDatabaseName })
export class StoreEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({ maxlength: 100, trim: true })
    name: string;

    @Prop({ required: true })
    platform: PLATFORMS;

    @Prop({ required: true })
    connection: string;

    @Prop({ required: true })
    shop: string;

    @Prop({ index: true, ref: UserEntity.name })
    owner: string;

    @Prop({ trim: true })
    description: string;

    @Prop()
    team: TeamMember[];
}

export const StoreSchema = SchemaFactory.createForClass(StoreEntity);

export type StoreDoc = StoreEntity & Document;
