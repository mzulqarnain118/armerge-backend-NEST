"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleNotFoundGuard = void 0;
const common_1 = require("@nestjs/common");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
let RoleNotFoundGuard = class RoleNotFoundGuard {
    async canActivate(context) {
        const { __role } = context
            .switchToHttp()
            .getRequest();
        if (!__role) {
            throw new common_1.NotFoundException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_NOT_FOUND_ERROR,
                message: 'role.error.notFound',
            });
        }
        return true;
    }
};
RoleNotFoundGuard = __decorate([
    (0, common_1.Injectable)()
], RoleNotFoundGuard);
exports.RoleNotFoundGuard = RoleNotFoundGuard;
//# sourceMappingURL=role.not-found.guard.js.map