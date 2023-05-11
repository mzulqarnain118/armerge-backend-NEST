"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_create_dto_1 = require("./user.create.dto");
class UserLoginDto extends (0, swagger_1.PickType)(user_create_dto_1.UserCreateDto, [
    'email',
    'password',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserLoginDto = UserLoginDto;
//# sourceMappingURL=user.login.dto.js.map