"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserImportDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_create_dto_1 = require("./user.create.dto");
class UserImportDto extends (0, swagger_1.OmitType)(user_create_dto_1.UserCreateDto, [
    'role',
    'password',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserImportDto = UserImportDto;
//# sourceMappingURL=user.import.dto.js.map