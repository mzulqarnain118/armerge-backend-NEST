import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { SettingDoc, SettingEntity } from 'src/common/setting/repository/entities/setting.entity';
export declare class SettingRepository extends DatabaseMongoUUIDRepositoryAbstract<SettingEntity, SettingDoc> {
    private readonly settingModel;
    constructor(settingModel: Model<SettingEntity>);
}
