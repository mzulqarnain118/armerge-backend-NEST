"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeySchema = exports.ApiKeyEntity = exports.ApiKeyDatabaseName = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const database_mongo_uuid_entity_abstract_1 = require("../../../database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../database/decorators/database.decorator");
const api_key_enum_constant_1 = require("../../constants/api-key.enum.constant");
exports.ApiKeyDatabaseName = 'apikeys';
let ApiKeyEntity = class ApiKeyEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, enum: require("../../constants/api-key.enum.constant").ENUM_API_KEY_TYPE }, name: { required: true, type: () => String }, key: { required: true, type: () => String }, hash: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, startDate: { required: false, type: () => Date }, endDate: { required: false, type: () => Date } };
    }
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: api_key_enum_constant_1.ENUM_API_KEY_TYPE,
        index: true,
        trim: true,
    }),
    __metadata("design:type", String)
], ApiKeyEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        type: String,
        minlength: 1,
        maxlength: 100,
        lowercase: true,
        trim: true,
    }),
    __metadata("design:type", String)
], ApiKeyEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        unique: true,
        index: true,
        trim: true,
    }),
    __metadata("design:type", String)
], ApiKeyEntity.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], ApiKeyEntity.prototype, "hash", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], ApiKeyEntity.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Date,
    }),
    __metadata("design:type", Date)
], ApiKeyEntity.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Date,
    }),
    __metadata("design:type", Date)
], ApiKeyEntity.prototype, "endDate", void 0);
ApiKeyEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.ApiKeyDatabaseName })
], ApiKeyEntity);
exports.ApiKeyEntity = ApiKeyEntity;
exports.ApiKeySchema = mongoose_1.SchemaFactory.createForClass(ApiKeyEntity);
exports.ApiKeySchema.pre('save', function (next) {
    this.name = this.name.toLowerCase();
    next();
});
//# sourceMappingURL=api-key.entity.js.map