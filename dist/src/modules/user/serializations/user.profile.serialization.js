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
exports.UserProfileSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const user_get_serialization_1 = require("./user.get.serialization");
class UserProfileSerialization extends (0, swagger_1.OmitType)(user_get_serialization_1.UserGetSerialization, [
    'isActive',
    'blocked',
    'passwordExpired',
    'passwordCreated',
    'passwordAttempt',
    'inactiveDate',
    'inactivePermanent',
    'blockedDate',
]) {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserProfileSerialization.prototype, "isActive", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserProfileSerialization.prototype, "inactivePermanent", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserProfileSerialization.prototype, "blocked", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserProfileSerialization.prototype, "passwordExpired", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserProfileSerialization.prototype, "passwordCreated", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], UserProfileSerialization.prototype, "passwordAttempt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserProfileSerialization.prototype, "inactiveDate", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserProfileSerialization.prototype, "blockedDate", void 0);
exports.UserProfileSerialization = UserProfileSerialization;
//# sourceMappingURL=user.profile.serialization.js.map