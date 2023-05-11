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
exports.PaginationFilterDatePipe = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("@nestjs/common/interfaces");
const core_1 = require("@nestjs/core");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const pagination_enum_constant_1 = require("../constants/pagination.enum.constant");
const pagination_service_1 = require("../services/pagination.service");
function PaginationFilterDatePipe(field, options) {
    let MixinPaginationFilterDatePipe = class MixinPaginationFilterDatePipe {
        constructor(request, paginationService, helperDateService) {
            this.request = request;
            this.paginationService = paginationService;
            this.helperDateService = helperDateService;
        }
        async transform(value) {
            if (!value) {
                return undefined;
            }
            let date = this.helperDateService.create(value);
            if (options?.time ===
                pagination_enum_constant_1.ENUM_PAGINATION_FILTER_DATE_TIME_OPTIONS.END_OF_DAY) {
                date = this.helperDateService.endOfDay(date);
            }
            else if (options?.time ===
                pagination_enum_constant_1.ENUM_PAGINATION_FILTER_DATE_TIME_OPTIONS.START_OF_DAY) {
                date = this.helperDateService.startOfDay(date);
            }
            this.request.__filters = {
                ...this.request.__filters,
                [field]: value,
            };
            return this.paginationService.filterDate(field, date);
        }
    };
    MixinPaginationFilterDatePipe = __decorate([
        (0, common_1.Injectable)({ scope: interfaces_1.Scope.REQUEST }),
        __param(0, (0, common_1.Inject)(core_1.REQUEST)),
        __metadata("design:paramtypes", [Object, pagination_service_1.PaginationService,
            helper_date_service_1.HelperDateService])
    ], MixinPaginationFilterDatePipe);
    return (0, common_1.mixin)(MixinPaginationFilterDatePipe);
}
exports.PaginationFilterDatePipe = PaginationFilterDatePipe;
//# sourceMappingURL=pagination.filter-date.pipe.js.map