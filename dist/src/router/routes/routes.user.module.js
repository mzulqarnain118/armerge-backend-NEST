"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUserModule = void 0;
const common_1 = require("@nestjs/common");
const api_key_module_1 = require("../../common/api-key/api-key.module");
const role_module_1 = require("../../modules/role/role.module");
const user_user_controller_1 = require("../../modules/user/controllers/user.user.controller");
const user_module_1 = require("../../modules/user/user.module");
let RoutesUserModule = class RoutesUserModule {
};
RoutesUserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_user_controller_1.UserUserController],
        providers: [],
        exports: [],
        imports: [user_module_1.UserModule, api_key_module_1.ApiKeyModule, role_module_1.RoleModule],
    })
], RoutesUserModule);
exports.RoutesUserModule = RoutesUserModule;
//# sourceMappingURL=routes.user.module.js.map