"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../../common/database/constants/database.constant");
const role_entity_1 = require("./entities/role.entity");
const role_repository_1 = require("./repositories/role.repository");
let RoleRepositoryModule = class RoleRepositoryModule {
};
RoleRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [role_repository_1.RoleRepository],
        exports: [role_repository_1.RoleRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: role_entity_1.RoleEntity.name,
                    schema: role_entity_1.RoleSchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], RoleRepositoryModule);
exports.RoleRepositoryModule = RoleRepositoryModule;
//# sourceMappingURL=role.repository.module.js.map