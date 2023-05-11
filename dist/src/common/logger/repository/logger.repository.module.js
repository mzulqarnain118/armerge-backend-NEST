"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../database/constants/database.constant");
const logger_entity_1 = require("./entities/logger.entity");
const logger_repository_1 = require("./repositories/logger.repository");
let LoggerRepositoryModule = class LoggerRepositoryModule {
};
LoggerRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [logger_repository_1.LoggerRepository],
        exports: [logger_repository_1.LoggerRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: logger_entity_1.LoggerEntity.name,
                    schema: logger_entity_1.LoggerSchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], LoggerRepositoryModule);
exports.LoggerRepositoryModule = LoggerRepositoryModule;
//# sourceMappingURL=logger.repository.module.js.map