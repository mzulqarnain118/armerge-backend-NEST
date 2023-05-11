"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingModule = void 0;
const common_1 = require("@nestjs/common");
const setting_middleware_module_1 = require("./middleware/setting.middleware.module");
const setting_repository_module_1 = require("./repository/setting.repository.module");
const setting_service_1 = require("./services/setting.service");
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [setting_repository_module_1.SettingRepositoryModule, setting_middleware_module_1.SettingMiddlewareModule],
        exports: [setting_service_1.SettingService],
        providers: [setting_service_1.SettingService],
        controllers: [],
    })
], SettingModule);
exports.SettingModule = SettingModule;
//# sourceMappingURL=setting.module.js.map