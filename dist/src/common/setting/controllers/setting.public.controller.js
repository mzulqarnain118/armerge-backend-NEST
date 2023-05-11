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
exports.SettingPublicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_decorator_1 = require("../../pagination/decorators/pagination.decorator");
const pagination_list_dto_1 = require("../../pagination/dtos/pagination.list.dto");
const pagination_service_1 = require("../../pagination/services/pagination.service");
const request_decorator_1 = require("../../request/decorators/request.decorator");
const response_decorator_1 = require("../../response/decorators/response.decorator");
const setting_list_constant_1 = require("../constants/setting.list.constant");
const setting_decorator_1 = require("../decorators/setting.decorator");
const setting_public_decorator_1 = require("../decorators/setting.public.decorator");
const setting_public_doc_1 = require("../docs/setting.public.doc");
const setting_request_dto_1 = require("../dtos/setting.request.dto");
const setting_entity_1 = require("../repository/entities/setting.entity");
const setting_get_serialization_1 = require("../serializations/setting.get.serialization");
const setting_list_serialization_1 = require("../serializations/setting.list.serialization");
const setting_service_1 = require("../services/setting.service");
let SettingPublicController = class SettingPublicController {
    constructor(settingService, paginationService) {
        this.settingService = settingService;
        this.paginationService = paginationService;
    }
    async list({ _search, _limit, _offset, _order }) {
        const find = {
            ..._search,
        };
        const settings = await this.settingService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.settingService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        return {
            _pagination: { total, totalPage },
            data: settings,
        };
    }
    async get(setting) {
        return { data: setting };
    }
};
__decorate([
    (0, setting_public_doc_1.SettingPublicListDoc)(),
    (0, response_decorator_1.ResponsePaging)('setting.list', {
        serialization: setting_list_serialization_1.SettingListSerialization,
    }),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)(setting_list_constant_1.SETTING_DEFAULT_PER_PAGE, setting_list_constant_1.SETTING_DEFAULT_ORDER_BY, setting_list_constant_1.SETTING_DEFAULT_ORDER_DIRECTION, setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SEARCH, setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_ORDER_BY)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto]),
    __metadata("design:returntype", Promise)
], SettingPublicController.prototype, "list", null);
__decorate([
    (0, setting_public_doc_1.SettingPublicGetDoc)(),
    (0, response_decorator_1.Response)('setting.get', {
        serialization: setting_get_serialization_1.SettingGetSerialization,
    }),
    (0, setting_public_decorator_1.SettingPublicGetGuard)(),
    (0, request_decorator_1.RequestParamGuard)(setting_request_dto_1.SettingRequestDto),
    (0, common_1.Get)('get/:setting'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, setting_decorator_1.GetSetting)(true)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setting_entity_1.SettingEntity]),
    __metadata("design:returntype", Promise)
], SettingPublicController.prototype, "get", null);
SettingPublicController = __decorate([
    (0, swagger_1.ApiTags)('common.public.setting'),
    (0, common_1.Controller)({
        version: '1',
        path: '/setting',
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService,
        pagination_service_1.PaginationService])
], SettingPublicController);
exports.SettingPublicController = SettingPublicController;
//# sourceMappingURL=setting.public.controller.js.map