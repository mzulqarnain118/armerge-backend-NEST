"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesPublicModule = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const auth_module_1 = require("../../common/auth/auth.module");
const health_module_1 = require("../../health/health.module");
const health_public_controller_1 = require("../../health/controllers/health.public.controller");
const message_public_controller_1 = require("../../common/message/controllers/message.public.controller");
const setting_public_controller_1 = require("../../common/setting/controllers/setting.public.controller");
const user_public_controller_1 = require("../../modules/user/controllers/user.public.controller");
const user_module_1 = require("../../modules/user/user.module");
const role_module_1 = require("../../modules/role/role.module");
const morgan_1 = __importDefault(require("morgan"));
let RoutesPublicModule = class RoutesPublicModule {
    configure(consumer) {
        consumer.apply((0, morgan_1.default)('common')).forRoutes('*');
    }
};
RoutesPublicModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            health_public_controller_1.HealthPublicController,
            message_public_controller_1.MessagePublicController,
            setting_public_controller_1.SettingPublicController,
            user_public_controller_1.UserPublicController,
        ],
        providers: [],
        exports: [],
        imports: [terminus_1.TerminusModule, health_module_1.HealthModule, user_module_1.UserModule, auth_module_1.AuthModule, role_module_1.RoleModule],
    })
], RoutesPublicModule);
exports.RoutesPublicModule = RoutesPublicModule;
//# sourceMappingURL=routes.public.module.js.map