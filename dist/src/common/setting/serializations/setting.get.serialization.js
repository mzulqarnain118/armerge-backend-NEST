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
exports.SettingGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
const setting_enum_constant_1 = require("../constants/setting.enum.constant");
class SettingGetSerialization extends response_id_serialization_1.ResponseIdSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of setting',
        example: 'MaintenanceOn',
        required: true,
    }),
    __metadata("design:type", String)
], SettingGetSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of setting',
        example: 'Maintenance Mode',
        required: false,
    }),
    __metadata("design:type", String)
], SettingGetSerialization.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data type of setting',
        example: 'BOOLEAN',
        required: true,
        enum: setting_enum_constant_1.ENUM_SETTING_DATA_TYPE,
    }),
    __metadata("design:type", String)
], SettingGetSerialization.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Value of string, can be type string/boolean/number',
        oneOf: [
            { type: 'string', readOnly: true, examples: ['on', 'off'] },
            { type: 'number', readOnly: true, examples: [100, 200] },
            { type: 'boolean', readOnly: true, examples: [true, false] },
        ],
        required: true,
    }),
    (0, class_transformer_1.Transform)(({ value, obj }) => {
        const regex = /^-?\d+$/;
        const checkNum = regex.test(value);
        if (obj.type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.BOOLEAN &&
            (value === 'true' || value === 'false')) {
            return value === 'true' ? true : false;
        }
        else if (obj.type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.NUMBER && checkNum) {
            return Number(value);
        }
        else if (obj.type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.ARRAY_OF_STRING) {
            return value.split(',');
        }
        return value;
    }),
    __metadata("design:type", Object)
], SettingGetSerialization.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: false,
    }),
    __metadata("design:type", Date)
], SettingGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: false,
    }),
    __metadata("design:type", Date)
], SettingGetSerialization.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], SettingGetSerialization.prototype, "deletedAt", void 0);
exports.SettingGetSerialization = SettingGetSerialization;
//# sourceMappingURL=setting.get.serialization.js.map