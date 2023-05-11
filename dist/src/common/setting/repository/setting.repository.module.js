"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../database/constants/database.constant");
const setting_entity_1 = require("./entities/setting.entity");
const setting_repository_1 = require("./repositories/setting.repository");
let SettingRepositoryModule = class SettingRepositoryModule {
};
SettingRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [setting_repository_1.SettingRepository],
        exports: [setting_repository_1.SettingRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: setting_entity_1.SettingEntity.name,
                    schema: setting_entity_1.SettingSchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], SettingRepositoryModule);
exports.SettingRepositoryModule = SettingRepositoryModule;
//# sourceMappingURL=setting.repository.module.js.map