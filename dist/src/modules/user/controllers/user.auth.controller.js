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
exports.UserAuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const aws_s3_service_1 = require("../../../common/aws/services/aws.s3.service");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const file_decorator_1 = require("../../../common/file/decorators/file.decorator");
const file_required_pipe_1 = require("../../../common/file/pipes/file.required.pipe");
const file_size_pipe_1 = require("../../../common/file/pipes/file.size.pipe");
const file_type_pipe_1 = require("../../../common/file/pipes/file.type.pipe");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const setting_service_1 = require("../../../common/setting/services/setting.service");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_decorator_1 = require("../decorators/user.decorator");
const user_auth_doc_1 = require("../docs/user.auth.doc");
const user_change_password_dto_1 = require("../dtos/user.change-password.dto");
const user_update_name_dto_1 = require("../dtos/user.update-name.dto");
const user_update_username_dto_1 = require("../dtos/user.update-username.dto");
const user_login_serialization_1 = require("../serializations/user.login.serialization");
const user_payload_serialization_1 = require("../serializations/user.payload.serialization");
const user_profile_serialization_1 = require("../serializations/user.profile.serialization");
const user_service_1 = require("../services/user.service");
let UserAuthController = class UserAuthController {
    constructor(userService, authService, settingService, awsS3Service) {
        this.userService = userService;
        this.authService = authService;
        this.settingService = settingService;
        this.awsS3Service = awsS3Service;
    }
    async refresh(refreshToken, user) {
        const userWithRole = await this.userService.joinWithRole(user);
        if (!userWithRole.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_INACTIVE_ERROR,
                message: 'role.error.inactive',
            });
        }
        const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
        if (checkPasswordExpired) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_EXPIRED_ERROR,
                message: 'user.error.passwordExpired',
            });
        }
        const payload = await this.userService.payloadSerialization(userWithRole);
        const tokenType = await this.authService.getTokenType();
        const expiresIn = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(payload);
        const payloadEncryption = await this.authService.getPayloadEncryption();
        let payloadHashedAccessToken = payloadAccessToken;
        if (payloadEncryption) {
            payloadHashedAccessToken =
                await this.authService.encryptAccessToken(payloadAccessToken);
        }
        const accessToken = await this.authService.createAccessToken(payloadHashedAccessToken);
        return {
            data: {
                tokenType,
                expiresIn,
                accessToken,
                refreshToken,
            },
        };
    }
    async changePassword(body, user) {
        const passwordAttempt = await this.settingService.getPasswordAttempt();
        const maxPasswordAttempt = await this.settingService.getMaxPasswordAttempt();
        if (passwordAttempt && user.passwordAttempt >= maxPasswordAttempt) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_ATTEMPT_MAX_ERROR,
                message: 'user.error.passwordAttemptMax',
            });
        }
        const matchPassword = await this.authService.validateUser(body.oldPassword, user.password);
        if (!matchPassword) {
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
        const newMatchPassword = await this.authService.validateUser(body.newPassword, user.password);
        if (newMatchPassword) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_NEW_MUST_DIFFERENCE_ERROR,
                message: 'user.error.newPasswordMustDifference',
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
        try {
            const password = await this.authService.createPassword(body.newPassword);
            await this.userService.updatePassword(user, password);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return;
    }
    async info(payload) {
        return { data: payload };
    }
    async profile(user) {
        const userWithRole = await this.userService.joinWithRole(user);
        return { data: userWithRole.toObject() };
    }
    async updateProfile(user, body) {
        try {
            await this.userService.updateName(user, body);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return;
    }
    async claimUsername(user, { username }) {
        const checkUsername = await this.userService.existByUsername(username);
        if (checkUsername) {
            throw new common_1.ConflictException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_USERNAME_EXISTS_ERROR,
                message: 'user.error.usernameExist',
            });
        }
        try {
            await this.userService.updateUsername(user, { username });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return;
    }
    async upload(user, file) {
        const filename = file.originalname;
        const content = file.buffer;
        const mime = filename
            .substring(filename.lastIndexOf('.') + 1, filename.length)
            .toLowerCase();
        const path = await this.userService.createPhotoFilename();
        try {
            const aws = await this.awsS3Service.putItemInBucket(`${path.filename}.${mime}`, content, {
                path: `${path.path}/${user._id}`,
            });
            await this.userService.updatePhoto(user, aws);
        }
        catch (err) {
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
    (0, user_auth_doc_1.UserAuthRefreshDoc)(),
    (0, response_decorator_1.Response)('user.refresh', { serialization: user_login_serialization_1.UserLoginSerialization }),
    (0, user_decorator_1.UserAuthProtected)(),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtRefreshProtected)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/refresh'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtToken)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "refresh", null);
__decorate([
    (0, user_auth_doc_1.UserAuthChangePasswordDoc)(),
    (0, response_decorator_1.Response)('user.changePassword'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Patch)('/change-password'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_change_password_dto_1.UserChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "changePassword", null);
__decorate([
    (0, user_auth_doc_1.UserAuthInfoDoc)(),
    (0, response_decorator_1.Response)('user.info', { serialization: user_payload_serialization_1.UserPayloadSerialization }),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Get)('/info'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_payload_serialization_1.UserPayloadSerialization]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "info", null);
__decorate([
    (0, user_auth_doc_1.UserAuthProfileDoc)(),
    (0, response_decorator_1.Response)('user.profile', {
        serialization: user_profile_serialization_1.UserProfileSerialization,
    }),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Get)('/profile'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "profile", null);
__decorate([
    (0, response_decorator_1.Response)('user.updateProfile', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Patch)('/profile/update'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_update_name_dto_1.UserUpdateNameDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "updateProfile", null);
__decorate([
    (0, response_decorator_1.Response)('user.claimUsername', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Patch)('/profile/claim-username'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_update_username_dto_1.UserUpdateUsernameDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "claimUsername", null);
__decorate([
    (0, user_auth_doc_1.UserAuthUploadProfileDoc)(),
    (0, response_decorator_1.Response)('user.upload'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, file_decorator_1.UploadFileSingle)('file'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/profile/upload'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.UploadedFile)(file_required_pipe_1.FileRequiredPipe, file_size_pipe_1.FileSizeImagePipe, file_type_pipe_1.FileTypeImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "upload", null);
UserAuthController = __decorate([
    (0, swagger_1.ApiTags)('modules.auth.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService,
        setting_service_1.SettingService,
        aws_s3_service_1.AwsS3Service])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user.auth.controller.js.map