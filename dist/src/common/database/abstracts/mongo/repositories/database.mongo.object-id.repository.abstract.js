"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMongoObjectIdRepositoryAbstract = void 0;
const mongoose_1 = require("mongoose");
const database_base_repository_abstract_1 = require("../../database.base-repository.abstract");
const database_constant_1 = require("../../../constants/database.constant");
class DatabaseMongoObjectIdRepositoryAbstract extends database_base_repository_abstract_1.DatabaseBaseRepositoryAbstract {
    constructor(repository, options) {
        super();
        this._repository = repository;
        this._joinOnFind = options;
    }
    async findAll(find, options) {
        const findAll = this._repository.find(find);
        if (options?.withDeleted) {
            findAll.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            findAll.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findAll.select(options.select);
        }
        if (options?.paging) {
            findAll.limit(options.paging.limit).skip(options.paging.offset);
        }
        if (options?.order) {
            findAll.sort(options.order);
        }
        if (options?.join) {
            findAll.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        if (options?.session) {
            findAll.session(options.session);
        }
        return findAll.lean();
    }
    async findAllDistinct(fieldDistinct, find, options) {
        const findAll = this._repository.distinct(fieldDistinct, find);
        if (options?.withDeleted) {
            findAll.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            findAll.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findAll.select(options.select);
        }
        if (options?.paging) {
            findAll.limit(options.paging.limit).skip(options.paging.offset);
        }
        if (options?.order) {
            findAll.sort(options.order);
        }
        if (options?.join) {
            findAll.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        if (options?.session) {
            findAll.session(options.session);
        }
        return findAll.lean();
    }
    async findOne(find, options) {
        const findOne = this._repository.findOne(find);
        if (options?.withDeleted) {
            findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        if (options?.order) {
            findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async findOneById(_id, options) {
        const findOne = this._repository.findById(new mongoose_1.Types.ObjectId(_id));
        if (options?.withDeleted) {
            findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        if (options?.order) {
            findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async findOneAndLock(find, options) {
        const findOne = this._repository.findOneAndUpdate(find, {
            new: true,
            useFindAndModify: false,
        });
        if (options?.withDeleted) {
            findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        if (options?.order) {
            findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async findOneByIdAndLock(_id, options) {
        const findOne = this._repository.findByIdAndUpdate(new mongoose_1.Types.ObjectId(_id), {
            new: true,
            useFindAndModify: false,
        });
        if (options?.withDeleted) {
            findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        if (options?.order) {
            findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async getTotal(find, options) {
        const count = this._repository.countDocuments(find);
        if (options?.withDeleted) {
            count.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            count.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.session) {
            count.session(options.session);
        }
        if (options?.join) {
            count.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        return count;
    }
    async exists(find, options) {
        if (options?.excludeId) {
            find = {
                ...find,
                _id: {
                    $nin: options?.excludeId.map((val) => new mongoose_1.Types.ObjectId(val)) ?? [],
                },
            };
        }
        const exist = this._repository.exists(find);
        if (options?.withDeleted) {
            exist.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            exist.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.session) {
            exist.session(options.session);
        }
        if (options?.join) {
            exist.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        const result = await exist;
        return result ? true : false;
    }
    async create(data, options) {
        const dataCreate = data;
        if (options?._id) {
            dataCreate._id = new mongoose_1.Types.ObjectId(options?._id);
        }
        const created = await this._repository.create([dataCreate], {
            session: options ? options.session : undefined,
        });
        return created[0];
    }
    async save(repository, options) {
        return repository.save(options);
    }
    async delete(repository, options) {
        return repository.deleteOne(options);
    }
    async softDelete(repository, options) {
        repository.deletedAt = new Date();
        return repository.save(options);
    }
    async restore(repository, options) {
        repository.deletedAt = undefined;
        return repository.save(options);
    }
    async createMany(data, options) {
        const dataCreate = data.map((val) => ({
            ...val,
            _id: new mongoose_1.Types.ObjectId(val._id),
        }));
        const create = this._repository.insertMany(dataCreate, {
            session: options ? options.session : undefined,
        });
        try {
            await create;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteManyByIds(_id, options) {
        const del = this._repository.deleteMany({
            _id: {
                $in: _id.map((val) => new mongoose_1.Types.ObjectId(val)),
            },
        });
        if (options?.session) {
            del.session(options.session);
        }
        if (options?.join) {
            del.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteMany(find, options) {
        const del = this._repository.deleteMany(find);
        if (options?.session) {
            del.session(options.session);
        }
        if (options?.join) {
            del.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteManyByIds(_id, options) {
        const softDel = this._repository
            .updateMany({
            _id: {
                $in: _id.map((val) => new mongoose_1.Types.ObjectId(val)),
            },
        }, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            softDel.session(options.session);
        }
        if (options?.join) {
            softDel.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteMany(find, options) {
        const softDel = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            softDel.session(options.session);
        }
        if (options?.join) {
            softDel.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restoreManyByIds(_id, options) {
        const rest = this._repository
            .updateMany({
            _id: {
                $in: _id.map((val) => new mongoose_1.Types.ObjectId(val)),
            },
        }, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(true);
        if (options?.session) {
            rest.session(options.session);
        }
        if (options?.join) {
            rest.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restoreMany(find, options) {
        const rest = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(true);
        if (options?.session) {
            rest.session(options.session);
        }
        if (options?.join) {
            rest.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async updateMany(find, data, options) {
        const update = this._repository
            .updateMany(find, {
            $set: data,
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            update.session(options.session);
        }
        if (options?.join) {
            update.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : options.join);
        }
        try {
            await update;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async raw(rawOperation, options) {
        if (!Array.isArray(rawOperation)) {
            throw new Error('Must in array');
        }
        const pipeline = rawOperation;
        if (options?.withDeleted) {
            pipeline.push({
                $match: {
                    $or: [
                        {
                            [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: {
                                $exists: false,
                            },
                        },
                        {
                            [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                        },
                    ],
                },
            });
        }
        else {
            pipeline.push({
                $match: {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
            });
        }
        const aggregate = this._repository.aggregate(pipeline);
        if (options?.session) {
            aggregate.session(options?.session);
        }
        return aggregate;
    }
    async model() {
        return this._repository;
    }
}
exports.DatabaseMongoObjectIdRepositoryAbstract = DatabaseMongoObjectIdRepositoryAbstract;
//# sourceMappingURL=database.mongo.object-id.repository.abstract.js.map