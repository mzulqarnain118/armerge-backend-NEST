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
exports.RolePutToRequestGuard = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("../services/role.service");
let RolePutToRequestGuard = class RolePutToRequestGuard {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async canActivate(context) {
        const request = context
            .switchToHttp()
            .getRequest();
        const { params } = request;
        const { role } = params;
        const check = await this.roleService.findOneById(role, {
            join: true,
        });
        request.__role = check;
        return true;
    }
};
RolePutToRequestGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RolePutToRequestGuard);
exports.RolePutToRequestGuard = RolePutToRequestGuard;
//# sourceMappingURL=role.put-to-request.guard.js.map