"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingNotFoundGuard = void 0;
const common_1 = require("@nestjs/common");
const setting_status_code_constant_1 = require("../constants/setting.status-code.constant");
let SettingNotFoundGuard = class SettingNotFoundGuard {
    async canActivate(context) {
        const { __setting } = context.switchToHttp().getRequest();
        if (!__setting) {
            throw new common_1.NotFoundException({
                statusCode: setting_status_code_constant_1.ENUM_SETTING_STATUS_CODE_ERROR.SETTING_NOT_FOUND_ERROR,
                message: 'setting.error.notFound',
            });
        }
        return true;
    }
};
SettingNotFoundGuard = __decorate([
    (0, common_1.Injectable)()
], SettingNotFoundGuard);
exports.SettingNotFoundGuard = SettingNotFoundGuard;
//# sourceMappingURL=setting.not-found.guard.js.map