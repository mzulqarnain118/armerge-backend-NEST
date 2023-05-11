"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const api_key_entity_1 = require("./entities/api-key.entity");
const api_key_repository_1 = require("./repositories/api-key.repository");
const database_constant_1 = require("../../database/constants/database.constant");
let ApiKeyRepositoryModule = class ApiKeyRepositoryModule {
};
ApiKeyRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [api_key_repository_1.ApiKeyRepository],
        exports: [api_key_repository_1.ApiKeyRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: api_key_entity_1.ApiKeyEntity.name,
                    schema: api_key_entity_1.ApiKeySchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], ApiKeyRepositoryModule);
exports.ApiKeyRepositoryModule = ApiKeyRepositoryModule;
//# sourceMappingURL=api-key.repository.module.js.map