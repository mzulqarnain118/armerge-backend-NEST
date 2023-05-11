"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesAuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../../common/auth/auth.module");
const aws_module_1 = require("../../common/aws/aws.module");
const user_auth_controller_1 = require("../../modules/user/controllers/user.auth.controller");
const user_module_1 = require("../../modules/user/user.module");
let RoutesAuthModule = class RoutesAuthModule {
};
RoutesAuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_auth_controller_1.UserAuthController],
        providers: [],
        exports: [],
        imports: [user_module_1.UserModule, auth_module_1.AuthModule, aws_module_1.AwsModule],
    })
], RoutesAuthModule);
exports.RoutesAuthModule = RoutesAuthModule;
//# sourceMappingURL=routes.auth.module.js.map