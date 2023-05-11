"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminUpdateBlockedGuard = exports.UserAdminUpdateActiveGuard = exports.UserAdminUpdateInactiveGuard = exports.UserAdminUpdateGuard = exports.UserAdminDeleteGuard = exports.UserAdminGetGuard = void 0;
const common_1 = require("@nestjs/common");
const user_constant_1 = require("../constants/user.constant");
const user_active_guard_1 = require("../guards/user.active.guard");
const user_blocked_guard_1 = require("../guards/user.blocked.guard");
const user_can_not_ourself_guard_1 = require("../guards/user.can-not-ourself.guard");
const user_inactive_permanent_guard_1 = require("../guards/user.inactive-permanent.guard");
const user_not_found_guard_1 = require("../guards/user.not-found.guard");
const user_put_to_request_guard_1 = require("../guards/user.put-to-request.guard");
function UserAdminGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard));
}
exports.UserAdminGetGuard = UserAdminGetGuard;
function UserAdminDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_can_not_ourself_guard_1.UserCanNotOurSelfGuard));
}
exports.UserAdminDeleteGuard = UserAdminDeleteGuard;
function UserAdminUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_can_not_ourself_guard_1.UserCanNotOurSelfGuard));
}
exports.UserAdminUpdateGuard = UserAdminUpdateGuard;
function UserAdminUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_can_not_ourself_guard_1.UserCanNotOurSelfGuard, user_blocked_guard_1.UserBlockedGuard, user_inactive_permanent_guard_1.UserInactivePermanentGuard, user_active_guard_1.UserActiveGuard), (0, common_1.SetMetadata)(user_constant_1.USER_INACTIVE_PERMANENT_META_KEY, [false]), (0, common_1.SetMetadata)(user_constant_1.USER_ACTIVE_META_KEY, [true]), (0, common_1.SetMetadata)(user_constant_1.USER_BLOCKED_META_KEY, [false]));
}
exports.UserAdminUpdateInactiveGuard = UserAdminUpdateInactiveGuard;
function UserAdminUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_can_not_ourself_guard_1.UserCanNotOurSelfGuard, user_blocked_guard_1.UserBlockedGuard, user_inactive_permanent_guard_1.UserInactivePermanentGuard, user_active_guard_1.UserActiveGuard), (0, common_1.SetMetadata)(user_constant_1.USER_INACTIVE_PERMANENT_META_KEY, [false]), (0, common_1.SetMetadata)(user_constant_1.USER_ACTIVE_META_KEY, [false]), (0, common_1.SetMetadata)(user_constant_1.USER_BLOCKED_META_KEY, [false]));
}
exports.UserAdminUpdateActiveGuard = UserAdminUpdateActiveGuard;
function UserAdminUpdateBlockedGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_can_not_ourself_guard_1.UserCanNotOurSelfGuard, user_blocked_guard_1.UserBlockedGuard), (0, common_1.SetMetadata)(user_constant_1.USER_BLOCKED_META_KEY, [false]));
}
exports.UserAdminUpdateBlockedGuard = UserAdminUpdateBlockedGuard;
//# sourceMappingURL=user.admin.decorator.js.map