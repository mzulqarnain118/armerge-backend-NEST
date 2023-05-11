"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAdminUpdateInactiveGuard = exports.RoleAdminUpdateActiveGuard = exports.RoleAdminDeleteGuard = exports.RoleAdminUpdateGuard = exports.RoleAdminGetGuard = void 0;
const common_1 = require("@nestjs/common");
const role_constant_1 = require("../constants/role.constant");
const role_active_guard_1 = require("../guards/role.active.guard");
const role_not_found_guard_1 = require("../guards/role.not-found.guard");
const role_put_to_request_guard_1 = require("../guards/role.put-to-request.guard");
function RoleAdminGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard));
}
exports.RoleAdminGetGuard = RoleAdminGetGuard;
function RoleAdminUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_IS_ACTIVE_META_KEY, [true]));
}
exports.RoleAdminUpdateGuard = RoleAdminUpdateGuard;
function RoleAdminDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_IS_ACTIVE_META_KEY, [true]));
}
exports.RoleAdminDeleteGuard = RoleAdminDeleteGuard;
function RoleAdminUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_IS_ACTIVE_META_KEY, [false]));
}
exports.RoleAdminUpdateActiveGuard = RoleAdminUpdateActiveGuard;
function RoleAdminUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_IS_ACTIVE_META_KEY, [true]));
}
exports.RoleAdminUpdateInactiveGuard = RoleAdminUpdateInactiveGuard;
//# sourceMappingURL=role.admin.decorator.js.map