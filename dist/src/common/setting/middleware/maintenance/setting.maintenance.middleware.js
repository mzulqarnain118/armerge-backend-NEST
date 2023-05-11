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
exports.SettingMaintenanceMiddleware = void 0;
const common_1 = require("@nestjs/common");
const error_status_code_constant_1 = require("../../../error/constants/error.status-code.constant");
const setting_service_1 = require("../../services/setting.service");
let SettingMaintenanceMiddleware = class SettingMaintenanceMiddleware {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async use(req, res, next) {
        const maintenance = await this.settingService.getMaintenance();
        if (maintenance) {
            throw new common_1.ServiceUnavailableException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_SERVICE_UNAVAILABLE,
                message: 'http.serverError.serviceUnavailable',
            });
        }
        next();
    }
};
SettingMaintenanceMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingMaintenanceMiddleware);
exports.SettingMaintenanceMiddleware = SettingMaintenanceMiddleware;
//# sourceMappingURL=setting.maintenance.middleware.js.map