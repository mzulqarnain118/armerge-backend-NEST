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
exports.UserUserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const user_user_doc_1 = require("../docs/user.user.doc");
const user_service_1 = require("../services/user.service");
let UserUserController = class UserUserController {
    constructor(userService) {
        this.userService = userService;
    }
    async deleteSelf(user) {
        try {
            await this.userService.inactivePermanent(user);
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
    (0, user_user_doc_1.UserUserDeleteSelfDoc)(),
    (0, response_decorator_1.Response)('user.deleteSelf'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtUserAccessProtected)(),
    (0, common_1.Delete)('/delete'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserUserController.prototype, "deleteSelf", null);
UserUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.user.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserUserController);
exports.UserUserController = UserUserController;
//# sourceMappingURL=user.user.controller.js.map