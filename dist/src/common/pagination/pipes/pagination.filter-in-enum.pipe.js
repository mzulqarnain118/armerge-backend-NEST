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
exports.PaginationFilterInEnumPipe = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("@nestjs/common/interfaces");
const core_1 = require("@nestjs/core");
const pagination_service_1 = require("../services/pagination.service");
function PaginationFilterInEnumPipe(field, defaultValue, defaultEnum) {
    let MixinPaginationFilterInEnumPipe = class MixinPaginationFilterInEnumPipe {
        constructor(request, paginationService) {
            this.request = request;
            this.paginationService = paginationService;
        }
        async transform(value) {
            let finalValue = defaultValue;
            if (value) {
                finalValue = value
                    .split(',')
                    .map((val) => defaultEnum[val])
                    .filter((val) => val);
            }
            this.request.__filters = {
                ...this.request.__filters,
                [field]: finalValue,
            };
            return this.paginationService.filterIn(field, finalValue);
        }
    };
    MixinPaginationFilterInEnumPipe = __decorate([
        (0, common_1.Injectable)({ scope: interfaces_1.Scope.REQUEST }),
        __param(0, (0, common_1.Inject)(core_1.REQUEST)),
        __metadata("design:paramtypes", [Object, pagination_service_1.PaginationService])
    ], MixinPaginationFilterInEnumPipe);
    return (0, common_1.mixin)(MixinPaginationFilterInEnumPipe);
}
exports.PaginationFilterInEnumPipe = PaginationFilterInEnumPipe;
//# sourceMappingURL=pagination.filter-in-enum.pipe.js.map