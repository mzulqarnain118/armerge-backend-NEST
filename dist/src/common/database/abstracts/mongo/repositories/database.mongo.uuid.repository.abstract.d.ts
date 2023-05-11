import { ClientSession, Model, PipelineStage, PopulateOptions, Document } from 'mongoose';
import { DatabaseBaseRepositoryAbstract } from 'src/common/database/abstracts/database.base-repository.abstract';
import { IDatabaseCreateOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions, IDatabaseCreateManyOptions, IDatabaseManyOptions, IDatabaseSoftDeleteManyOptions, IDatabaseRestoreManyOptions, IDatabaseRawOptions, IDatabaseSaveOptions } from 'src/common/database/interfaces/database.interface';
export declare abstract class DatabaseMongoUUIDRepositoryAbstract<Entity, EntityDocument> extends DatabaseBaseRepositoryAbstract<EntityDocument> {
    protected _repository: Model<Entity>;
    protected _joinOnFind?: PopulateOptions | PopulateOptions[];
    constructor(repository: Model<Entity>, options?: PopulateOptions | PopulateOptions[]);
    findAll<T = EntityDocument>(find?: Record<string, any>, options?: IDatabaseFindAllOptions<ClientSession>): Promise<T[]>;
    findAllDistinct<T = EntityDocument>(fieldDistinct: string, find?: Record<string, any>, options?: IDatabaseFindAllOptions<ClientSession>): Promise<T[]>;
    findOne<T = EntityDocument>(find: Record<string, any>, options?: IDatabaseFindOneOptions<ClientSession>): Promise<T>;
    findOneById<T = EntityDocument>(_id: string, options?: IDatabaseFindOneOptions<ClientSession>): Promise<T>;
    findOneAndLock<T = EntityDocument>(find: Record<string, any>, options?: IDatabaseFindOneOptions<ClientSession>): Promise<T>;
    findOneByIdAndLock<T = EntityDocument>(_id: string, options?: IDatabaseFindOneOptions<ClientSession>): Promise<T>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions<ClientSession>): Promise<number>;
    exists(find: Record<string, any>, options?: IDatabaseExistOptions<ClientSession>): Promise<boolean>;
    create<Dto = any>(data: Dto, options?: IDatabaseCreateOptions<ClientSession>): Promise<EntityDocument>;
    save(repository: EntityDocument & Document<string>, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    delete(repository: EntityDocument & Document<string>, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    softDelete(repository: EntityDocument & Document<string> & {
        deletedAt?: Date;
    }, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    restore(repository: EntityDocument & Document<string> & {
        deletedAt?: Date;
    }, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    createMany<Dto>(data: Dto[], options?: IDatabaseCreateManyOptions<ClientSession>): Promise<boolean>;
    deleteManyByIds(_id: string[], options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    softDeleteManyByIds(_id: string[], options?: IDatabaseSoftDeleteManyOptions<ClientSession>): Promise<boolean>;
    softDeleteMany(find: Record<string, any>, options?: IDatabaseSoftDeleteManyOptions<ClientSession>): Promise<boolean>;
    restoreManyByIds(_id: string[], options?: IDatabaseRestoreManyOptions<ClientSession>): Promise<boolean>;
    restoreMany(find: Record<string, any>, options?: IDatabaseRestoreManyOptions<ClientSession>): Promise<boolean>;
    updateMany<Dto>(find: Record<string, any>, data: Dto, options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    raw<RawResponse, RawQuery = PipelineStage[]>(rawOperation: RawQuery, options?: IDatabaseRawOptions): Promise<RawResponse[]>;
    model(): Promise<Model<Entity>>;
}
