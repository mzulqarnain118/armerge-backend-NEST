"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJwtRefreshProtected = exports.AuthJwtAdminAccessProtected = exports.AuthJwtUserAccessProtected = exports.AuthJwtAccessProtected = exports.AuthJwtToken = exports.AuthJwtPayload = void 0;
const common_1 = require("@nestjs/common");
const auth_jwt_access_guard_1 = require("../guards/jwt-access/auth.jwt-access.guard");
const auth_jwt_refresh_guard_1 = require("../guards/jwt-refresh/auth.jwt-refresh.guard");
const common_2 = require("@nestjs/common");
const role_payload_type_guard_1 = require("../../../modules/role/guards/payload/role.payload.type.guard");
const role_constant_1 = require("../../../modules/role/constants/role.constant");
const role_enum_constant_1 = require("../../../modules/role/constants/role.enum.constant");
exports.AuthJwtPayload = (0, common_2.createParamDecorator)((data, ctx) => {
    const { user } = ctx
        .switchToHttp()
        .getRequest();
    return data ? user[data] : user;
});
exports.AuthJwtToken = (0, common_2.createParamDecorator)((data, ctx) => {
    const { headers } = ctx.switchToHttp().getRequest();
    const { authorization } = headers;
    const authorizations = authorization.split(' ');
    return authorizations.length >= 2 ? authorizations[1] : undefined;
});
function AuthJwtAccessProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_jwt_access_guard_1.AuthJwtAccessGuard));
}
exports.AuthJwtAccessProtected = AuthJwtAccessProtected;
function AuthJwtUserAccessProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_jwt_access_guard_1.AuthJwtAccessGuard, role_payload_type_guard_1.RolePayloadTypeGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_TYPE_META_KEY, [role_enum_constant_1.ENUM_ROLE_TYPE.USER]));
}
exports.AuthJwtUserAccessProtected = AuthJwtUserAccessProtected;
function AuthJwtAdminAccessProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_jwt_access_guard_1.AuthJwtAccessGuard, role_payload_type_guard_1.RolePayloadTypeGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_TYPE_META_KEY, [
        role_enum_constant_1.ENUM_ROLE_TYPE.SUPER_ADMIN,
        role_enum_constant_1.ENUM_ROLE_TYPE.ADMIN,
    ]));
}
exports.AuthJwtAdminAccessProtected = AuthJwtAdminAccessProtected;
function AuthJwtRefreshProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_jwt_refresh_guard_1.AuthJwtRefreshGuard));
}
exports.AuthJwtRefreshProtected = AuthJwtRefreshProtected;
//# sourceMappingURL=auth.jwt.decorator.js.map