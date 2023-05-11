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
exports.ApiKeyAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
const api_key_list_constant_1 = require("../constants/api-key.list.constant");
const api_key_admin_decorator_1 = require("../decorators/api-key.admin.decorator");
const api_key_decorator_1 = require("../decorators/api-key.decorator");
const api_key_admin_doc_1 = require("../docs/api-key.admin.doc");
const api_key_create_dto_1 = require("../dtos/api-key.create.dto");
const api_key_request_dto_1 = require("../dtos/api-key.request.dto");
const api_key_update_date_dto_1 = require("../dtos/api-key.update-date.dto");
const api_key_update_dto_1 = require("../dtos/api-key.update.dto");
const api_key_entity_1 = require("../repository/entities/api-key.entity");
const api_key_create_serialization_1 = require("../serializations/api-key.create.serialization");
const api_key_get_serialization_1 = require("../serializations/api-key.get.serialization");
const api_key_list_serialization_1 = require("../serializations/api-key.list.serialization");
const api_key_reset_serialization_1 = require("../serializations/api-key.reset.serialization");
const api_key_service_1 = require("../services/api-key.service");
const auth_jwt_decorator_1 = require("../../auth/decorators/auth.jwt.decorator");
const error_status_code_constant_1 = require("../../error/constants/error.status-code.constant");
const pagination_decorator_1 = require("../../pagination/decorators/pagination.decorator");
const pagination_list_dto_1 = require("../../pagination/dtos/pagination.list.dto");
const pagination_service_1 = require("../../pagination/services/pagination.service");
const policy_enum_constant_1 = require("../../policy/constants/policy.enum.constant");
const policy_decorator_1 = require("../../policy/decorators/policy.decorator");
const request_decorator_1 = require("../../request/decorators/request.decorator");
const response_decorator_1 = require("../../response/decorators/response.decorator");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
let ApiKeyAdminController = class ApiKeyAdminController {
    constructor(apiKeyService, paginationService) {
        this.apiKeyService = apiKeyService;
        this.paginationService = paginationService;
    }
    async list({ _search, _limit, _offset, _order }, isActive, type) {
        const find = {
            ..._search,
            ...isActive,
            ...type,
        };
        const apiKeys = await this.apiKeyService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.apiKeyService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        return {
            _pagination: { totalPage, total },
            data: apiKeys,
        };
    }
    async get(apiKey) {
        return { data: apiKey };
    }
    async create(body) {
        try {
            const created = await this.apiKeyService.create(body);
            return {
                data: {
                    _id: created.doc._id,
                    secret: created.secret,
                },
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
    async reset(apiKey) {
        try {
            const secret = await this.apiKeyService.createSecret();
            const updated = await this.apiKeyService.reset(apiKey, secret);
            return {
                data: {
                    _id: updated._id,
                    secret,
                },
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
    async updateName(body, apiKey) {
        try {
            await this.apiKeyService.update(apiKey, body);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return { data: { _id: apiKey._id } };
    }
    async inactive(apiKey) {
        try {
            await this.apiKeyService.inactive(apiKey);
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
    async active(apiKey) {
        try {
            await this.apiKeyService.active(apiKey);
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
    async updateDate(body, apiKey) {
        try {
            await this.apiKeyService.updateDate(apiKey, body);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
        return { data: { _id: apiKey._id } };
    }
    async delete(apiKey) {
        try {
            await this.apiKeyService.delete(apiKey);
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
};
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('apiKey.list', {
        serialization: api_key_list_serialization_1.ApiKeyListSerialization,
    }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)(api_key_list_constant_1.API_KEY_DEFAULT_PER_PAGE, api_key_list_constant_1.API_KEY_DEFAULT_ORDER_BY, api_key_list_constant_1.API_KEY_DEFAULT_ORDER_DIRECTION, api_key_list_constant_1.API_KEY_DEFAULT_AVAILABLE_SEARCH, api_key_list_constant_1.API_KEY_DEFAULT_AVAILABLE_ORDER_BY)),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('isActive', api_key_list_constant_1.API_KEY_DEFAULT_IS_ACTIVE)),
    __param(2, (0, pagination_decorator_1.PaginationQueryFilterInEnum)('type', api_key_list_constant_1.API_KEY_DEFAULT_TYPE, api_key_enum_constant_1.ENUM_API_KEY_TYPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "list", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminGetDoc)(),
    (0, response_decorator_1.Response)('apiKey.get', {
        serialization: api_key_get_serialization_1.ApiKeyGetSerialization,
    }),
    (0, api_key_admin_decorator_1.ApiKeyAdminGetGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Get)('/get/:apiKey'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, api_key_decorator_1.GetApiKey)(true)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_entity_1.ApiKeyEntity]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "get", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminCreateDoc)(),
    (0, response_decorator_1.Response)('apiKey.create', { serialization: api_key_create_serialization_1.ApiKeyCreateSerialization }),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_create_dto_1.ApiKeyCreateDto]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "create", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminResetDoc)(),
    (0, response_decorator_1.Response)('apiKey.reset', { serialization: api_key_reset_serialization_1.ApiKeyResetSerialization }),
    (0, api_key_admin_decorator_1.ApiKeyAdminUpdateResetGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Patch)('/update/:apiKey/reset'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, api_key_decorator_1.GetApiKey)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "reset", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('apiKey.update', { serialization: response_id_serialization_1.ResponseIdSerialization }),
    (0, api_key_admin_decorator_1.ApiKeyAdminUpdateGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Put)('/update/:apiKey'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, api_key_decorator_1.GetApiKey)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_update_dto_1.ApiKeyUpdateDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "updateName", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('apiKey.inactive'),
    (0, api_key_admin_decorator_1.ApiKeyAdminUpdateInactiveGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Patch)('/update/:apiKey/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, api_key_decorator_1.GetApiKey)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "inactive", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminActiveDoc)(),
    (0, response_decorator_1.Response)('apiKey.active'),
    (0, api_key_admin_decorator_1.ApiKeyAdminUpdateActiveGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Patch)('/update/:apiKey/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, api_key_decorator_1.GetApiKey)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "active", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('apiKey.updateDate', { serialization: response_id_serialization_1.ResponseIdSerialization }),
    (0, api_key_admin_decorator_1.ApiKeyAdminUpdateGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Put)('/update/:apiKey/date'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, api_key_decorator_1.GetApiKey)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_update_date_dto_1.ApiKeyUpdateDateDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "updateDate", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminDeleteDoc)(),
    (0, response_decorator_1.Response)('apiKey.delete'),
    (0, api_key_admin_decorator_1.ApiKeyAdminDeleteGuard)(),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.DELETE],
    }),
    (0, auth_jwt_decorator_1.AuthJwtAdminAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, request_decorator_1.RequestParamGuard)(api_key_request_dto_1.ApiKeyRequestDto),
    (0, common_1.Delete)('/delete/:apiKey'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, api_key_decorator_1.GetApiKey)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "delete", null);
ApiKeyAdminController = __decorate([
    (0, swagger_1.ApiTags)('common.admin.apiKey'),
    (0, common_1.Controller)({
        version: '1',
        path: '/api-key',
    }),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService,
        pagination_service_1.PaginationService])
], ApiKeyAdminController);
exports.ApiKeyAdminController = ApiKeyAdminController;
//# sourceMappingURL=api-key.admin.controller.js.map