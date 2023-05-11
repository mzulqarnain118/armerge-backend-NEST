"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthProtected = exports.UserProtected = exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
const user_constant_1 = require("../constants/user.constant");
const user_payload_put_to_request_guard_1 = require("../guards/payload/user.payload.put-to-request.guard");
const user_active_guard_1 = require("../guards/user.active.guard");
const user_blocked_guard_1 = require("../guards/user.blocked.guard");
const user_inactive_permanent_guard_1 = require("../guards/user.inactive-permanent.guard");
const user_not_found_guard_1 = require("../guards/user.not-found.guard");
exports.GetUser = (0, common_1.createParamDecorator)((returnPlain, ctx) => {
    const { __user } = ctx
        .switchToHttp()
        .getRequest();
    return returnPlain ? __user.toObject() : __user;
});
function UserProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_payload_put_to_request_guard_1.UserPayloadPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard));
}
exports.UserProtected = UserProtected;
function UserAuthProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_blocked_guard_1.UserBlockedGuard, user_inactive_permanent_guard_1.UserInactivePermanentGuard, user_active_guard_1.UserActiveGuard), (0, common_1.SetMetadata)(user_constant_1.USER_INACTIVE_PERMANENT_META_KEY, [false]), (0, common_1.SetMetadata)(user_constant_1.USER_BLOCKED_META_KEY, [false]), (0, common_1.SetMetadata)(user_constant_1.USER_ACTIVE_META_KEY, [true]));
}
exports.UserAuthProtected = UserAuthProtected;
//# sourceMappingURL=user.decorator.js.map