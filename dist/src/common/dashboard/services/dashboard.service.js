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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const helper_number_service_1 = require("../../helper/services/helper.number.service");
let DashboardService = class DashboardService {
    constructor(helperDateService, helperNumberService) {
        this.helperDateService = helperDateService;
        this.helperNumberService = helperNumberService;
    }
    getStartAndEndDate(date) {
        const today = this.helperDateService.create();
        let { startDate, endDate } = date;
        if (!startDate && !endDate) {
            startDate = this.helperDateService.startOfYear(today);
            endDate = this.helperDateService.endOfYear(today);
        }
        else {
            if (!startDate) {
                startDate = this.helperDateService.startOfDay();
            }
            else {
                startDate = this.helperDateService.startOfDay(startDate);
            }
            if (!endDate) {
                endDate = this.helperDateService.endOfDay();
            }
            else {
                endDate = this.helperDateService.endOfDay(endDate);
            }
        }
        return {
            startDate,
            endDate,
        };
    }
    getPercentage(value, total) {
        return this.helperNumberService.percent(value, total);
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_date_service_1.HelperDateService,
        helper_number_service_1.HelperNumberService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map