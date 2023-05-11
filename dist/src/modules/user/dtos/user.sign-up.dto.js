"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignUpDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_create_dto_1 = require("./user.create.dto");
class UserSignUpDto extends (0, swagger_1.OmitType)(user_create_dto_1.UserCreateDto, [
    'role',
    'signUpFrom',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserSignUpDto = UserSignUpDto;
//# sourceMappingURL=user.sign-up.dto.js.map