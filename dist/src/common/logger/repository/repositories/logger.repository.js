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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const api_key_entity_1 = require("../../../api-key/repository/entities/api-key.entity");
const database_mongo_uuid_repository_abstract_1 = require("../../../database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract");
const database_decorator_1 = require("../../../database/decorators/database.decorator");
const logger_entity_1 = require("../entities/logger.entity");
let LoggerRepository = class LoggerRepository extends database_mongo_uuid_repository_abstract_1.DatabaseMongoUUIDRepositoryAbstract {
    constructor(LoggerDoc) {
        super(LoggerDoc, {
            path: 'apiKey',
            match: '_id',
            model: api_key_entity_1.ApiKeyEntity.name,
        });
        this.LoggerDoc = LoggerDoc;
    }
};
LoggerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(logger_entity_1.LoggerEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LoggerRepository);
exports.LoggerRepository = LoggerRepository;
//# sourceMappingURL=logger.repository.js.map