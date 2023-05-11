"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const api_key_create_dto_1 = require("./api-key.create.dto");
class ApiKeyUpdateDto extends (0, swagger_1.PickType)(api_key_create_dto_1.ApiKeyCreateDto, [
    'name',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ApiKeyUpdateDto = ApiKeyUpdateDto;
//# sourceMappingURL=api-key.update.dto.js.map