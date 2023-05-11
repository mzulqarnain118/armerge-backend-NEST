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
exports.AwsS3Serialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AwsS3Serialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.system.directoryPath(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Serialization.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.system.filePath(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Serialization.prototype, "pathWithFilename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.system.fileName(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Serialization.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: `${faker_1.faker.internet.url()}/${faker_1.faker.system.filePath()}`,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Serialization.prototype, "completedUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.internet.url(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Serialization.prototype, "baseUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.system.mimeType(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Serialization.prototype, "mime", void 0);
exports.AwsS3Serialization = AwsS3Serialization;
//# sourceMappingURL=aws.s3.serialization.js.map