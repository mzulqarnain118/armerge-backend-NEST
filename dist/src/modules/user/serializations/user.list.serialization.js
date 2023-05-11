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
exports.UserListSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_serialization_1 = require("../../../common/aws/serializations/aws.s3.serialization");
const role_list_serialization_1 = require("../../role/serializations/role.list.serialization");
const user_profile_serialization_1 = require("./user.profile.serialization");
class UserListSerialization extends (0, swagger_1.OmitType)(user_profile_serialization_1.UserProfileSerialization, [
    'photo',
    'signUpDate',
    'signUpFrom',
    'role',
]) {
}
__decorate([
    (0, class_transformer_1.Type)(() => role_list_serialization_1.RoleListSerialization),
    __metadata("design:type", role_list_serialization_1.RoleListSerialization)
], UserListSerialization.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserListSerialization.prototype, "photo", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserListSerialization.prototype, "signUpDate", void 0);
exports.UserListSerialization = UserListSerialization;
//# sourceMappingURL=user.list.serialization.js.map