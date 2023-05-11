"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGoogleOAuth2LoginProtected = exports.AuthGoogleOAuth2SignUpProtected = void 0;
const common_1 = require("@nestjs/common");
const auth_google_oauth2_login_guard_1 = require("../guards/google-oauth2/auth.google-oauth2-login.guard");
const auth_google_oauth2_sign_up_guard_1 = require("../guards/google-oauth2/auth.google-oauth2-sign-up.guard");
function AuthGoogleOAuth2SignUpProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_google_oauth2_sign_up_guard_1.AuthGoogleOauth2SignUpGuard));
}
exports.AuthGoogleOAuth2SignUpProtected = AuthGoogleOAuth2SignUpProtected;
function AuthGoogleOAuth2LoginProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_google_oauth2_login_guard_1.AuthGoogleOauth2LoginGuard));
}
exports.AuthGoogleOAuth2LoginProtected = AuthGoogleOAuth2LoginProtected;
//# sourceMappingURL=auth.google.decorator.js.map