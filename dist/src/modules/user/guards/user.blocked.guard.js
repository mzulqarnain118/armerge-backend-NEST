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
exports.UserBlockedGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const user_constant_1 = require("../constants/user.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
let UserBlockedGuard = class UserBlockedGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(user_constant_1.USER_BLOCKED_META_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const { __user } = context
            .switchToHttp()
            .getRequest();
        if (!required.includes(__user.blocked)) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_BLOCKED_ERROR,
                message: 'user.error.blocked',
            });
        }
        return true;
    }
};
UserBlockedGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], UserBlockedGuard);
exports.UserBlockedGuard = UserBlockedGuard;
//# sourceMappingURL=user.blocked.guard.js.map