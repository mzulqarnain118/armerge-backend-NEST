"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingMiddlewareModule = void 0;
const common_1 = require("@nestjs/common");
const setting_maintenance_middleware_1 = require("./maintenance/setting.maintenance.middleware");
let SettingMiddlewareModule = class SettingMiddlewareModule {
    configure(consumer) {
        consumer
            .apply(setting_maintenance_middleware_1.SettingMaintenanceMiddleware)
            .exclude({
            path: 'api/v:version*/user/login',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/user/login',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/v:version*/user/refresh',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/user/refresh',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/v:version*/admin/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        }, {
            path: 'api/admin/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        }, {
            path: 'api/v:version*/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        }, {
            path: 'api/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        })
            .forRoutes('*');
    }
};
SettingMiddlewareModule = __decorate([
    (0, common_1.Module)({})
], SettingMiddlewareModule);
exports.SettingMiddlewareModule = SettingMiddlewareModule;
//# sourceMappingURL=setting.middleware.module.js.map