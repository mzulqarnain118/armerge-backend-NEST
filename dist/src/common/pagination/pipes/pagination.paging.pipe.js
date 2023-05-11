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
exports.PaginationPagingPipe = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("@nestjs/common/interfaces");
const core_1 = require("@nestjs/core");
const helper_number_service_1 = require("../../helper/services/helper.number.service");
const pagination_service_1 = require("../services/pagination.service");
function PaginationPagingPipe(defaultPerPage) {
    let MixinPaginationPagingPipe = class MixinPaginationPagingPipe {
        constructor(request, paginationService, helperNumberService) {
            this.request = request;
            this.paginationService = paginationService;
            this.helperNumberService = helperNumberService;
        }
        async transform(value) {
            const page = this.paginationService.page(this.helperNumberService.create(value?.page ?? 1));
            const perPage = this.paginationService.perPage(this.helperNumberService.create(value?.perPage ?? defaultPerPage));
            const offset = this.paginationService.offset(page, perPage);
            this.request.__pagination = {
                ...this.request.__pagination,
                page,
                perPage,
            };
            return {
                ...value,
                page,
                perPage,
                _limit: perPage,
                _offset: offset,
            };
        }
    };
    MixinPaginationPagingPipe = __decorate([
        (0, common_1.Injectable)({ scope: interfaces_1.Scope.REQUEST }),
        __param(0, (0, common_1.Inject)(core_1.REQUEST)),
        __metadata("design:paramtypes", [Object, pagination_service_1.PaginationService,
            helper_number_service_1.HelperNumberService])
    ], MixinPaginationPagingPipe);
    return (0, common_1.mixin)(MixinPaginationPagingPipe);
}
exports.PaginationPagingPipe = PaginationPagingPipe;
//# sourceMappingURL=pagination.paging.pipe.js.map