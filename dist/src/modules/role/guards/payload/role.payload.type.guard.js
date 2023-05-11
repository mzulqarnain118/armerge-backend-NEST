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
exports.RolePayloadTypeGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const helper_array_service_1 = require("../../../../common/helper/services/helper.array.service");
const role_constant_1 = require("../../constants/role.constant");
const role_enum_constant_1 = require("../../constants/role.enum.constant");
const role_status_code_constant_1 = require("../../constants/role.status-code.constant");
let RolePayloadTypeGuard = class RolePayloadTypeGuard {
    constructor(reflector, helperArrayService) {
        this.reflector = reflector;
        this.helperArrayService = helperArrayService;
    }
    async canActivate(context) {
        const requiredFor = this.reflector.getAllAndOverride(role_constant_1.ROLE_TYPE_META_KEY, [context.getHandler(), context.getClass()]);
        const { user } = context.switchToHttp().getRequest();
        const { type } = user;
        if (!requiredFor || type === role_enum_constant_1.ENUM_ROLE_TYPE.SUPER_ADMIN) {
            return true;
        }
        const hasFor = this.helperArrayService.includes(requiredFor, type);
        if (!hasFor) {
            throw new common_1.ForbiddenException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_PAYLOAD_TYPE_INVALID_ERROR,
                message: 'role.error.typeForbidden',
            });
        }
        return hasFor;
    }
};
RolePayloadTypeGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        helper_array_service_1.HelperArrayService])
], RolePayloadTypeGuard);
exports.RolePayloadTypeGuard = RolePayloadTypeGuard;
//# sourceMappingURL=role.payload.type.guard.js.map