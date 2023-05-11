"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_google_oauth2_login_strategy_1 = require("./guards/google-oauth2/auth.google-oauth2-login.strategy");
const auth_google_oauth2_sign_up_strategy_1 = require("./guards/google-oauth2/auth.google-oauth2-sign-up.strategy");
const auth_jwt_access_strategy_1 = require("./guards/jwt-access/auth.jwt-access.strategy");
const auth_jwt_refresh_strategy_1 = require("./guards/jwt-refresh/auth.jwt-refresh.strategy");
const auth_service_1 = require("./services/auth.service");
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        const providers = [
            auth_jwt_access_strategy_1.AuthJwtAccessStrategy,
            auth_jwt_refresh_strategy_1.AuthJwtRefreshStrategy,
        ];
        if (process.env.SSO_GOOGLE_CLIENT_ID &&
            process.env.SSO_GOOGLE_CLIENT_SECRET) {
            providers.push(auth_google_oauth2_login_strategy_1.AuthGoogleOAuth2LoginStrategy);
            providers.push(auth_google_oauth2_sign_up_strategy_1.AuthGoogleOAuth2SignUpStrategy);
        }
        return {
            module: AuthModule_1,
            providers,
            exports: [],
            controllers: [],
            imports: [],
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
        controllers: [],
        imports: [],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map