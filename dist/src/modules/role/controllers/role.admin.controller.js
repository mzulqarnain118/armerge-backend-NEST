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
exports.RoleAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const pagination_list_dto_1 = require("../../../common/pagination/dtos/pagination.list.dto");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const policy_decorator_1 = require("../../../common/policy/decorators/policy.decorator");
const request_decorator_1 = require("../../../common/request/decorators/request.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const role_enum_constant_1 = require("../constants/role.enum.constant");
const role_list_constant_1 = require("../constants/role.list.constant");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
const role_admin_decorator_1 = require("../decorators/role.admin.decorator");
const role_decorator_1 = require("../decorators/role.decorator");
const role_admin_doc_1 = require("../docs/role.admin.doc");
const role_create_dto_1 = require("../dtos/role.create.dto");
const role_request_dto_1 = require("../dtos/role.request.dto");
const role_update_permission_dto_1 = require("../dtos/role.update-permission.dto");
const role_update_dto_1 = require("../dtos/role.update.dto");
const role_entity_1 = require("../repository/entities/role.entity");
const role_get_serialization_1 = require("../serializations/role.get.serialization");
const role_list_serialization_1 = require("../serializations/role.list.serialization");
const role_service_1 = require("../services/role.service");
const user_service_1 = require("../../user/services/user.service");
let RoleAdminController = class RoleAdminController {
    constructor(paginationService, roleService, userService) {
        this.paginationService = paginationService;
        this.roleService = roleService;
        this.userService = userService;
    }
    async list({ _search, _limit, _offset, _order }, isActive, type) {
        const find = {
            ..._search,
            ...isActive,
            ...type,
        };
        const roles = await this.roleService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.roleService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        return {
            _pagination: { total, totalPage },
            data: roles,
        };
    }
    async get(role) {
        return { data: role };
    }
    async create({ name, description, type, permissions }) {
        const exist = await this.roleService.existByName(name);
        if (exist) {
            throw new common_1.ConflictException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_EXIST_ERROR,
                message: 'role.error.exist',
            });
        }
        try {
            const create = await this.roleService.create({
                name,
                description,
                type,
                permissions,
            });
            return {
                data: { _id: create._id },
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
    async update(role, { description }) {
        try {
            await this.roleService.update(role, { description });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return {
            data: { _id: role._id },
        };
    }
    async updatePermission(role, { permissions, type }) {
        try {
            await this.roleService.updatePermissions(role, {
                permissions,
                type,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return {
            data: { _id: role._id },
        };
    }
    async delete(role) {
        const used = await this.userService.findOne({
            role: role._id,
        });
        if (used) {
            throw new common_1.ConflictException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_USED_ERROR,
                message: 'role.error.used',
            });
        }
        try {
            await this.roleService.delete(role);
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
    async inactive(role) {
        try {
            await this.roleService.inactive(role);
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
    async active(role) {
        try {
            await this.roleService.active(role);
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
    (0, role_admin_doc_1.RoleAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('role.list', {
        serialization: role_list_serialization_1.RoleListSerialization,
    }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)(role_list_constant_1.ROLE_DEFAULT_PER_PAGE, role_list_constant_1.ROLE_DEFAULT_ORDER_BY, role_list_constant_1.ROLE_DEFAULT_ORDER_DIRECTION, role_list_constant_1.ROLE_DEFAULT_AVAILABLE_SEARCH, role_list_constant_1.ROLE_DEFAULT_AVAILABLE_ORDER_BY)),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('isActive', role_list_constant_1.ROLE_DEFAULT_IS_ACTIVE)),
    __param(2, (0, pagination_decorator_1.PaginationQueryFilterInEnum)('type', role_list_constant_1.ROLE_DEFAULT_TYPE, role_enum_constant_1.ENUM_ROLE_TYPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "list", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminGetDoc)(),
    (0, response_decorator_1.Response)('role.get', {
        serialization: role_get_serialization_1.RoleGetSerialization,
    }),
    (0, role_admin_decorator_1.RoleAdminGetGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(role_request_dto_1.RoleRequestDto),
    (0, common_1.Get)('get/:role'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, role_decorator_1.GetRole)(true)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_entity_1.RoleEntity]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "get", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminCreateDoc)(),
    (0, response_decorator_1.Response)('role.create', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_create_dto_1.RoleCreateDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "create", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('role.update', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, role_admin_decorator_1.RoleAdminUpdateGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(role_request_dto_1.RoleRequestDto),
    (0, common_1.Put)('/update/:role'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, role_update_dto_1.RoleUpdateDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "update", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('role.updatePermission', {
        serialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, role_admin_decorator_1.RoleAdminUpdateGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(role_request_dto_1.RoleRequestDto),
    (0, common_1.Put)('/update/:role/permission'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, role_update_permission_dto_1.RoleUpdatePermissionDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "updatePermission", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminDeleteDoc)(),
    (0, response_decorator_1.Response)('role.delete'),
    (0, role_admin_decorator_1.RoleAdminDeleteGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.DELETE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(role_request_dto_1.RoleRequestDto),
    (0, common_1.Delete)('/delete/:role'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "delete", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('role.inactive'),
    (0, role_admin_decorator_1.RoleAdminUpdateInactiveGuard)(),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(role_request_dto_1.RoleRequestDto),
    (0, common_1.Patch)('/update/:role/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "inactive", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminActiveDoc)(),
    (0, response_decorator_1.Response)('role.active'),
    (0, role_admin_decorator_1.RoleAdminUpdateActiveGuard)(),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, request_decorator_1.RequestParamGuard)(role_request_dto_1.RoleRequestDto),
    (0, common_1.Patch)('/update/:role/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "active", null);
RoleAdminController = __decorate([
    (0, swagger_1.ApiTags)('common.admin.role'),
    (0, common_1.Controller)({
        version: '1',
        path: '/role',
    }),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        role_service_1.RoleService,
        user_service_1.UserService])
], RoleAdminController);
exports.RoleAdminController = RoleAdminController;
//# sourceMappingURL=role.admin.controller.js.map