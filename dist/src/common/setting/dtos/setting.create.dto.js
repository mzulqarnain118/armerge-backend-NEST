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
exports.SettingCreateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const request_safe_string_validation_1 = require("../../request/validations/request.safe-string.validation");
const setting_enum_constant_1 = require("../constants/setting.enum.constant");
class SettingCreateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: false, type: () => String }, type: { required: true, enum: require("../constants/setting.enum.constant").ENUM_SETTING_DATA_TYPE }, value: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, request_safe_string_validation_1.SafeString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], SettingCreateDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        name: 'description',
        examples: ['Maintenance Mode', 'Max Part Number Aws Chunk File'],
        description: 'The description about setting',
        nullable: true,
    }),
    __metadata("design:type", String)
], SettingCreateDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Data type of setting',
        example: 'BOOLEAN',
        required: true,
        enum: setting_enum_constant_1.ENUM_SETTING_DATA_TYPE,
    }),
    __metadata("design:type", String)
], SettingCreateDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        name: 'value',
        description: 'The value of setting',
        nullable: false,
        oneOf: [
            { type: 'string', readOnly: true, examples: ['on', 'off'] },
            { type: 'number', readOnly: true, examples: [100, 200] },
            { type: 'boolean', readOnly: true, examples: [true, false] },
        ],
    }),
    __metadata("design:type", String)
], SettingCreateDto.prototype, "value", void 0);
exports.SettingCreateDto = SettingCreateDto;
//# sourceMappingURL=setting.create.dto.js.map