"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdatePermissionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const role_create_dto_1 = require("./role.create.dto");
class RoleUpdatePermissionDto extends (0, swagger_1.OmitType)(role_create_dto_1.RoleCreateDto, [
    'name',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.RoleUpdatePermissionDto = RoleUpdatePermissionDto;
//# sourceMappingURL=role.update-permission.dto.js.map