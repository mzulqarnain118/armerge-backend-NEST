"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const api_key_module_1 = require("../common/api-key/api-key.module");
const auth_module_1 = require("../common/auth/auth.module");
const common_module_1 = require("../common/common.module");
const user_module_1 = require("../modules/user/user.module");
const role_module_1 = require("../modules/role/role.module");
const migration_api_key_seed_1 = require("./seeds/migration.api-key.seed");
const migration_setting_seed_1 = require("./seeds/migration.setting.seed");
const migration_role_seed_1 = require("./seeds/migration.role.seed");
const migration_user_seed_1 = require("./seeds/migration.user.seed");
let MigrationModule = class MigrationModule {
};
MigrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            nestjs_command_1.CommandModule,
            api_key_module_1.ApiKeyModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
        ],
        providers: [
            migration_api_key_seed_1.MigrationApiKeySeed,
            migration_setting_seed_1.MigrationSettingSeed,
            migration_role_seed_1.MigrationRoleSeed,
            migration_user_seed_1.MigrationUserSeed,
        ],
        exports: [],
    })
], MigrationModule);
exports.MigrationModule = MigrationModule;
//# sourceMappingURL=migration.module.js.map