import { Types } from 'mongoose';
import { DatabaseBaseEntityAbstract } from 'src/common/database/abstracts/database.base-entity.abstract';
import { DATABASE_CREATED_AT_FIELD_NAME, DATABASE_DELETED_AT_FIELD_NAME, DATABASE_UPDATED_AT_FIELD_NAME } from 'src/common/database/constants/database.constant';
export declare abstract class DatabaseMongoObjectIdEntityAbstract extends DatabaseBaseEntityAbstract<Types.ObjectId> {
    _id: Types.ObjectId;
    [DATABASE_DELETED_AT_FIELD_NAME]?: Date;
    [DATABASE_CREATED_AT_FIELD_NAME]?: Date;
    [DATABASE_UPDATED_AT_FIELD_NAME]?: Date;
}
