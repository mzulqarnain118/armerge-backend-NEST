"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesAdminModule = void 0;
const common_1 = require("@nestjs/common");
const api_key_module_1 = require("../../common/api-key/api-key.module");
const api_key_admin_controller_1 = require("../../common/api-key/controllers/api-key.admin.controller");
const auth_module_1 = require("../../common/auth/auth.module");
const role_admin_controller_1 = require("../../modules/role/controllers/role.admin.controller");
const role_module_1 = require("../../modules/role/role.module");
const setting_admin_controller_1 = require("../../common/setting/controllers/setting.admin.controller");
const user_admin_controller_1 = require("../../modules/user/controllers/user.admin.controller");
const user_module_1 = require("../../modules/user/user.module");
let RoutesAdminModule = class RoutesAdminModule {
};
RoutesAdminModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            setting_admin_controller_1.SettingAdminController,
            api_key_admin_controller_1.ApiKeyAdminController,
            role_admin_controller_1.RoleAdminController,
            user_admin_controller_1.UserAdminController,
        ],
        providers: [],
        exports: [],
        imports: [api_key_module_1.ApiKeyModule, role_module_1.RoleModule, user_module_1.UserModule, auth_module_1.AuthModule],
    })
], RoutesAdminModule);
exports.RoutesAdminModule = RoutesAdminModule;
//# sourceMappingURL=routes.admin.module.js.map