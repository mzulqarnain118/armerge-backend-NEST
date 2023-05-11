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
exports.UserAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const file_decorator_1 = require("../../../common/file/decorators/file.decorator");
const file_extract_pipe_1 = require("../../../common/file/pipes/file.extract.pipe");
const file_required_pipe_1 = require("../../../common/file/pipes/file.required.pipe");
const file_size_pipe_1 = require("../../../common/file/pipes/file.size.pipe");
const file_type_pipe_1 = require("../../../common/file/pipes/file.type.pipe");
const file_validation_pipe_1 = require("../../../common/file/pipes/file.validation.pipe");
const helper_enum_constant_1 = require("../../../common/helper/constants/helper.enum.constant");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const request_decorator_1 = require("../../../common/request/decorators/request.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_admin_decorator_1 = require("../decorators/user.admin.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const user_create_dto_1 = require("../dtos/user.create.dto");
const user_import_dto_1 = require("../dtos/user.import.dto");
const user_request_dto_1 = require("../dtos/user.request.dto");
const user_get_serialization_1 = require("../serializations/user.get.serialization");
const user_list_serialization_1 = require("../serializations/user.list.serialization");
const user_service_1 = require("../services/user.service");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const user_update_name_dto_1 = require("../dtos/user.update-name.dto");
const user_list_constant_1 = require("../constants/user.list.constant");
const pagination_list_dto_1 = require("../../../common/pagination/dtos/pagination.list.dto");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const role_service_1 = require("../../role/services/role.service");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const policy_decorator_1 = require("../../../common/policy/decorators/policy.decorator");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const user_admin_doc_1 = require("../docs/user.admin.doc");
const user_enum_constant_1 = require("../constants/user.enum.constant");
let UserAdminController = class UserAdminController {
    constructor(authService, paginationService, userService, roleService) {
        this.authService = authService;
        this.paginationService = paginationService;
        this.userService = userService;
        this.roleService = roleService;
    }
    async list({ _search, _limit, _offset, _order }, isActive, blocked, inactivePermanent, role) {
        const find = {
            ..._search,
            ...isActive,
            ...blocked,
            ...inactivePermanent,
            ...role,
        };
        const users = await this.userService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.userService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        return {
            _pagination: { total, totalPage },
            data: users,
        };
    }
    async get(user) {
        const userWithRole = await this.userService.joinWithRole(user);
        return { data: userWithRole.toObject() };
    }
    async create({ email, mobileNumber, role, ...body }) {
        const promises = [
            this.roleService.findOneById(role),
            this.userService.existByEmail(email),
        ];
        if (mobileNumber) {
            promises.push(this.userService.existByMobileNumber(mobileNumber));
        }
        const [checkRole, emailExist, mobileNumberExist] = await Promise.all(promises);
        if (!checkRole) {
            throw new common_1.NotFoundException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_NOT_FOUND_ERROR,
                message: 'role.error.notFound',
            });
        }
        else if (emailExist) {
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
            const created = await this.userService.create({
                email,
                mobileNumber,
                signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
                role,
                ...body,
            }, password);
            return {
                data: { _id: created._id },
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
    }
    async delete(user) {
        try {
            await this.userService.delete(user);
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
    async update(user, body) {
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
        return {
            data: { _id: user._id },
        };
    }
    async inactive(user) {
        try {
            await this.userService.inactive(user);
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
    async active(user) {
        try {
            await this.userService.active(user);
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
    async import(file) {
        const role = await this.roleService.findOneByName('user');
        const passwordString = await this.authService.createPasswordRandom();
        const password = await this.authService.createPassword(passwordString);
        try {
            await this.userService.import(file.dto, role._id, password);
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
    async export() {
        const users = await this.userService.findAll({});
        return { data: users };
    }
    async blocked(user) {
        try {
            await this.userService.blocked(user);
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
    (0, user_admin_doc_1.UserAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('user.list', {
        serialization: user_list_serialization_1.UserListSerialization,
    }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)(user_list_constant_1.USER_DEFAULT_PER_PAGE, user_list_constant_1.USER_DEFAULT_ORDER_BY, user_list_constant_1.USER_DEFAULT_ORDER_DIRECTION, user_list_constant_1.USER_DEFAULT_AVAILABLE_SEARCH, user_list_constant_1.USER_DEFAULT_AVAILABLE_ORDER_BY)),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('isActive', user_list_constant_1.USER_DEFAULT_IS_ACTIVE)),
    __param(2, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('blocked', user_list_constant_1.USER_DEFAULT_BLOCKED)),
    __param(3, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('inactivePermanent', user_list_constant_1.USER_DEFAULT_INACTIVE_PERMANENT)),
    __param(4, (0, pagination_decorator_1.PaginationQueryFilterEqualObjectId)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "list", null);
__decorate([
    (0, user_admin_doc_1.UserAdminGetDoc)(),
    (0, response_decorator_1.Response)('user.get', {
        serialization: user_get_serialization_1.UserGetSerialization,
    }),
    (0, user_admin_decorator_1.UserAdminGetGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, common_1.Get)('/get/:user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "get", null);
__decorate([
    (0, user_admin_doc_1.UserAdminCreateDoc)(),
    (0, response_decorator_1.Response)('user.create', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "create", null);
__decorate([
    (0, user_admin_doc_1.UserAdminDeleteDoc)(),
    (0, response_decorator_1.Response)('user.delete'),
    (0, user_admin_decorator_1.UserAdminDeleteGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.DELETE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, common_1.Delete)('/delete/:user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "delete", null);
__decorate([
    (0, user_admin_doc_1.UserAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('user.update', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, user_admin_decorator_1.UserAdminUpdateGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, common_1.Put)('/update/:user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_update_name_dto_1.UserUpdateNameDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "update", null);
__decorate([
    (0, user_admin_doc_1.UserAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('user.inactive'),
    (0, user_admin_decorator_1.UserAdminUpdateInactiveGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, common_1.Patch)('/update/:user/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "inactive", null);
__decorate([
    (0, user_admin_doc_1.UserAdminActiveDoc)(),
    (0, response_decorator_1.Response)('user.active'),
    (0, user_admin_decorator_1.UserAdminUpdateActiveGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, common_1.Patch)('/update/:user/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "active", null);
__decorate([
    (0, user_admin_doc_1.UserAdminImportDoc)(),
    (0, response_decorator_1.Response)('user.import'),
    (0, file_decorator_1.UploadFileSingle)('file'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [
            policy_enum_constant_1.ENUM_POLICY_ACTION.READ,
            policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE,
            policy_enum_constant_1.ENUM_POLICY_ACTION.IMPORT,
        ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, common_1.Post)('/import'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)(file_required_pipe_1.FileRequiredPipe, file_size_pipe_1.FileSizeExcelPipe, file_type_pipe_1.FileTypeExcelPipe, file_extract_pipe_1.FileExtractPipe, new file_validation_pipe_1.FileValidationPipe(user_import_dto_1.UserImportDto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "import", null);
__decorate([
    (0, user_admin_doc_1.UserAdminExportDoc)(),
    (0, response_decorator_1.ResponseExcel)({
        serialization: user_list_serialization_1.UserListSerialization,
        fileType: helper_enum_constant_1.ENUM_HELPER_FILE_TYPE.CSV,
    }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.EXPORT],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/export'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "export", null);
__decorate([
    (0, user_admin_doc_1.UserAdminBlockedDoc)(),
    (0, response_decorator_1.Response)('user.blocked'),
    (0, user_admin_decorator_1.UserAdminUpdateBlockedGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, common_1.Patch)('/update/:user/blocked'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "blocked", null);
UserAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        pagination_service_1.PaginationService,
        user_service_1.UserService,
        role_service_1.RoleService])
], UserAdminController);
exports.UserAdminController = UserAdminController;
//# sourceMappingURL=user.admin.controller.js.map