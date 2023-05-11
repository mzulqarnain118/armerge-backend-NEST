import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { LoggerDoc, LoggerEntity } from 'src/common/logger/repository/entities/logger.entity';
export declare class LoggerRepository extends DatabaseMongoUUIDRepositoryAbstract<LoggerEntity, LoggerDoc> {
    private readonly LoggerDoc;
    constructor(LoggerDoc: Model<LoggerEntity>);
}
