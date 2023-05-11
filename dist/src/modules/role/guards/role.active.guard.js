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
exports.RoleActiveGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const role_constant_1 = require("../constants/role.constant");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
let RoleActiveGuard = class RoleActiveGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(role_constant_1.ROLE_IS_ACTIVE_META_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const { __role } = context
            .switchToHttp()
            .getRequest();
        if (!required.includes(__role.isActive)) {
            throw new common_1.BadRequestException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_IS_ACTIVE_ERROR,
                message: 'role.error.isActiveInvalid',
            });
        }
        return true;
    }
};
RoleActiveGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RoleActiveGuard);
exports.RoleActiveGuard = RoleActiveGuard;
//# sourceMappingURL=role.active.guard.js.map