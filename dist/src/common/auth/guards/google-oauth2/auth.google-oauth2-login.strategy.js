"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGoogleOAuth2LoginStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AuthGoogleOAuth2LoginStrategy = class AuthGoogleOAuth2LoginStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'googleLogin') {
    constructor(configService) {
        super({
            clientID: configService.get('auth.googleOAuth2.clientId'),
            clientSecret: configService.get('auth.googleOAuth2.clientSecret'),
            callbackURL: configService.get('auth.googleOAuth2.callbackUrlLogin'),
            scope: ['profile', 'email', 'openid'],
        });
        this.configService = configService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            accessToken,
            refreshToken,
        };
        done(null, user);
    }
};
AuthGoogleOAuth2LoginStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthGoogleOAuth2LoginStrategy);
exports.AuthGoogleOAuth2LoginStrategy = AuthGoogleOAuth2LoginStrategy;
//# sourceMappingURL=auth.google-oauth2-login.strategy.js.map