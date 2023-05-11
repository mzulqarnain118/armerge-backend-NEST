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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPublicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const auth_google_decorator_1 = require("../../../common/auth/decorators/auth.google.decorator");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const role_service_1 = require("../../role/services/role.service");
const setting_service_1 = require("../../../common/setting/services/setting.service");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_public_doc_1 = require("../docs/user.public.doc");
const user_login_dto_1 = require("../dtos/user.login.dto");
const user_sign_up_dto_1 = require("../dtos/user.sign-up.dto");
const user_login_serialization_1 = require("../serializations/user.login.serialization");
const user_service_1 = require("../services/user.service");
let UserPublicController = class UserPublicController {
    constructor(databaseConnection, userService, authService, roleService, settingService) {
        this.databaseConnection = databaseConnection;
        this.userService = userService;
        this.authService = authService;
        this.roleService = roleService;
        this.settingService = settingService;
    }
    async login({ email, password }) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        const passwordAttempt = await this.settingService.getPasswordAttempt();
        const maxPasswordAttempt = await this.settingService.getMaxPasswordAttempt();
        if (passwordAttempt && user.passwordAttempt >= maxPasswordAttempt) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_ATTEMPT_MAX_ERROR,
                message: 'user.error.passwordAttemptMax',
            });
        }
        const validate = await this.authService.validateUser(password, user.password);
        if (!validate) {
            try {
                await this.userService.increasePasswordAttempt(user);
            }
            catch (err) {
                throw new common_1.InternalServerErrorException({
                    statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                    message: 'http.serverError.internalServerError',
                    _error: err.message,
                });
            }
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_NOT_MATCH_ERROR,
                message: 'user.error.passwordNotMatch',
            });
        }
        else if (user.blocked) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_BLOCKED_ERROR,
                message: 'user.error.blocked',
            });
        }
        else if (user.inactivePermanent) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_INACTIVE_PERMANENT_ERROR,
                message: 'user.error.inactivePermanent',
            });
        }
        else if (!user.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        const userWithRole = await this.userService.joinWithRole(user);
        if (!userWithRole.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_INACTIVE_ERROR,
                message: 'role.error.inactive',
            });
        }
        try {
            await this.userService.resetPasswordAttempt(user);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        const payload = await this.userService.payloadSerialization(userWithRole);
        const tokenType = await this.authService.getTokenType();
        const expiresIn = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(payload);
        const payloadRefreshToken = await this.authService.createPayloadRefreshToken(payload._id, {
            loginWith: auth_enum_constant_1.ENUM_AUTH_LOGIN_WITH.LOCAL,
        });
        const payloadEncryption = await this.authService.getPayloadEncryption();
        let payloadHashedAccessToken = payloadAccessToken;
        let payloadHashedRefreshToken = payloadRefreshToken;
        if (payloadEncryption) {
            payloadHashedAccessToken =
                await this.authService.encryptAccessToken(payloadAccessToken);
            payloadHashedRefreshToken =
                await this.authService.encryptRefreshToken(payloadRefreshToken);
        }
        const accessToken = await this.authService.createAccessToken(payloadHashedAccessToken);
        const refreshToken = await this.authService.createRefreshToken(payloadHashedRefreshToken);
        const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
        if (checkPasswordExpired) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_SUCCESS.USER_PASSWORD_EXPIRED_ERROR,
                message: 'user.error.passwordExpired',
            });
        }
        return {
            data: {
                tokenType,
                expiresIn,
                accessToken,
                refreshToken,
            },
        };
    }
    async signUp({ email, mobileNumber, ...body }) {
        console.log(" COME HERE ");
        const promises = [
            this.roleService.findOneByName('user'),
            this.userService.existByEmail(email),
        ];
        if (mobileNumber) {
            promises.push(this.userService.existByMobileNumber(mobileNumber));
        }
        const [role, emailExist, mobileNumberExist] = await Promise.all(promises);
        if (emailExist) {
            throw new common_1.ConflictException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_EMAIL_EXIST_ERROR,
                message: 'user.error.emailExist',
            });
        }
        else if (mobileNumberExist) {
            throw new common_1.ConflictException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_MOBILE_NUMBER_EXIST_ERROR,
                message: 'user.error.mobileNumberExist',
            });
        }
        try {
            const password = await this.authService.createPassword(body.password);
            await this.userService.create({
                email,
                mobileNumber,
                signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
                role: role._id,
                ...body,
            }, password);
            return;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
    }
    async loginGoogle() {
        return;
    }
    async loginGoogleCallback({ email, accessToken: googleAccessToken, refreshToken: googleRefreshToken, }) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        else if (user.blocked) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_BLOCKED_ERROR,
                message: 'user.error.blocked',
            });
        }
        else if (user.inactivePermanent) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_INACTIVE_PERMANENT_ERROR,
                message: 'user.error.inactivePermanent',
            });
        }
        else if (!user.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        const userWithRole = await this.userService.joinWithRole(user);
        if (!userWithRole.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_INACTIVE_ERROR,
                message: 'role.error.inactive',
            });
        }
        try {
            await this.userService.updateGoogleSSO(user, {
                accessToken: googleAccessToken,
                refreshToken: googleRefreshToken,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        const payload = await this.userService.payloadSerialization(userWithRole);
        const tokenType = await this.authService.getTokenType();
        const expiresIn = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(payload);
        const payloadRefreshToken = await this.authService.createPayloadRefreshToken(payload._id, {
            loginWith: auth_enum_constant_1.ENUM_AUTH_LOGIN_WITH.GOOGLE,
        });
        const payloadEncryption = await this.authService.getPayloadEncryption();
        let payloadHashedAccessToken = payloadAccessToken;
        let payloadHashedRefreshToken = payloadRefreshToken;
        if (payloadEncryption) {
            payloadHashedAccessToken =
                await this.authService.encryptAccessToken(payloadAccessToken);
            payloadHashedRefreshToken =
                await this.authService.encryptRefreshToken(payloadRefreshToken);
        }
        const accessToken = await this.authService.createAccessToken(payloadHashedAccessToken);
        const refreshToken = await this.authService.createRefreshToken(payloadHashedRefreshToken);
        return {
            data: {
                tokenType,
                expiresIn,
                accessToken,
                refreshToken,
            },
        };
    }
    async signUpGoogle() {
        return;
    }
    async signUpGoogleCallback({ email, firstName, lastName, accessToken: googleAccessToken, refreshToken: googleRefreshToken, }) {
        const promises = [
            this.roleService.findOneByName('user'),
            this.userService.existByEmail(email),
        ];
        const [role, emailExist] = await Promise.all(promises);
        if (emailExist) {
            throw new common_1.ConflictException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_EMAIL_EXIST_ERROR,
                message: 'user.error.emailExist',
            });
        }
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            const passwordString = await this.authService.createPasswordRandom();
            const password = await this.authService.createPassword(passwordString);
            const user = await this.userService.create({
                email,
                firstName,
                lastName,
                password: passwordString,
                role: role._id,
                signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.GOOGLE,
            }, password, { session });
            await this.userService.updateGoogleSSO(user, {
                accessToken: googleAccessToken,
                refreshToken: googleRefreshToken,
            }, { session });
            await session.commitTransaction();
            await session.endSession();
        }
        catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return;
    }
};
__decorate([
    (0, user_public_doc_1.UserPublicLoginDoc)(),
    (0, response_decorator_1.Response)('user.login', {
        serialization: user_login_serialization_1.UserLoginSerialization,
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/login'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "login", null);
__decorate([
    (0, user_public_doc_1.UserPublicSignUpDoc)(),
    (0, response_decorator_1.Response)('user.signUp'),
    (0, common_1.Post)('/sign-up'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_sign_up_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, response_decorator_1.Response)('user.loginGoogle'),
    (0, auth_google_decorator_1.AuthGoogleOAuth2LoginProtected)(),
    (0, common_1.Get)('/login/google'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "loginGoogle", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, response_decorator_1.Response)('user.loginGoogleCallback'),
    (0, auth_google_decorator_1.AuthGoogleOAuth2LoginProtected)(),
    (0, common_1.Get)('/login/google/callback'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "loginGoogleCallback", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, response_decorator_1.Response)('user.signUpGoogle'),
    (0, auth_google_decorator_1.AuthGoogleOAuth2SignUpProtected)(),
    (0, common_1.Get)('/sign-up/google'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "signUpGoogle", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, response_decorator_1.Response)('user.signUpGoogleCallback'),
    (0, auth_google_decorator_1.AuthGoogleOAuth2SignUpProtected)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Get)('/sign-up/google/callback'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "signUpGoogleCallback", null);
UserPublicController = __decorate([
    (0, swagger_1.ApiTags)('modules.public.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __param(0, (0, database_decorator_1.DatabaseConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Connection,
        user_service_1.UserService,
        auth_service_1.AuthService,
        role_service_1.RoleService,
        setting_service_1.SettingService])
], UserPublicController);
exports.UserPublicController = UserPublicController;
//# sourceMappingURL=user.public.controller.js.map