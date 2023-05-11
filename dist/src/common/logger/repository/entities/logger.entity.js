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
exports.LoggerSchema = exports.LoggerEntity = exports.LoggerDatabaseName = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const api_key_entity_1 = require("../../../api-key/repository/entities/api-key.entity");
const database_mongo_uuid_entity_abstract_1 = require("../../../database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../database/decorators/database.decorator");
const logger_enum_constant_1 = require("../../constants/logger.enum.constant");
const request_enum_constant_1 = require("../../../request/constants/request.enum.constant");
const role_enum_constant_1 = require("../../../../modules/role/constants/role.enum.constant");
exports.LoggerDatabaseName = 'loggers';
let LoggerEntity = class LoggerEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { level: { required: true, type: () => String }, action: { required: true, type: () => String }, method: { required: true, type: () => String }, requestId: { required: false, type: () => String }, user: { required: false, type: () => String }, role: { required: false, type: () => String }, apiKey: { required: false, type: () => String }, anonymous: { required: true, type: () => Boolean }, type: { required: false, enum: require("../../../../modules/role/constants/role.enum.constant").ENUM_ROLE_TYPE }, description: { required: true, type: () => String }, params: { required: false, type: () => Object }, bodies: { required: false, type: () => Object }, statusCode: { required: false, type: () => Number }, path: { required: false, type: () => String }, tags: { required: true, type: () => [String] } };
    }
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: logger_enum_constant_1.ENUM_LOGGER_LEVEL,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: logger_enum_constant_1.ENUM_LOGGER_ACTION,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: request_enum_constant_1.ENUM_REQUEST_METHOD,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "requestId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        ref: api_key_entity_1.ApiKeyEntity.name,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "apiKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], LoggerEntity.prototype, "anonymous", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        enum: role_enum_constant_1.ENUM_ROLE_TYPE,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Object,
    }),
    __metadata("design:type", Object)
], LoggerEntity.prototype, "params", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Object,
    }),
    __metadata("design:type", Object)
], LoggerEntity.prototype, "bodies", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Number,
    }),
    __metadata("design:type", Number)
], LoggerEntity.prototype, "statusCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "path", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        default: [],
        type: (Array),
    }),
    __metadata("design:type", Array)
], LoggerEntity.prototype, "tags", void 0);
LoggerEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.LoggerDatabaseName })
], LoggerEntity);
exports.LoggerEntity = LoggerEntity;
exports.LoggerSchema = mongoose_1.SchemaFactory.createForClass(LoggerEntity);
//# sourceMappingURL=logger.entity.js.map