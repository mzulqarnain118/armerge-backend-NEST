/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { ENUM_SETTING_DATA_TYPE } from 'src/common/setting/constants/setting.enum.constant';
import { Document } from 'mongoose';
export declare const SettingDatabaseName = "settings";
export declare class SettingEntity extends DatabaseMongoUUIDEntityAbstract {
    name: string;
    description?: string;
    type: ENUM_SETTING_DATA_TYPE;
    value: string;
}
export declare const SettingSchema: import("mongoose").Schema<SettingEntity, import("mongoose").Model<SettingEntity, any, any, any, Document<unknown, any, SettingEntity> & Omit<SettingEntity & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SettingEntity, Document<unknown, {}, import("mongoose").FlatRecord<SettingEntity>> & Omit<import("mongoose").FlatRecord<SettingEntity> & Required<{
    _id: string;
}>, never>>;
export type SettingDoc = SettingEntity & Document;
