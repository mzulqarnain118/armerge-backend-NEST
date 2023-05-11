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
exports.AwsS3MultipartSerialization = exports.AwsS3MultipartPartsSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_serialization_1 = require("./aws.s3.serialization");
class AwsS3MultipartPartsSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.random.alpha(10),
        description: 'ETag from aws after init multipart',
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3MultipartPartsSerialization.prototype, "ETag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartPartsSerialization.prototype, "PartNumber", void 0);
exports.AwsS3MultipartPartsSerialization = AwsS3MultipartPartsSerialization;
class AwsS3MultipartSerialization extends aws_s3_serialization_1.AwsS3Serialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.random.alpha(20),
        description: 'Upload id from aws after init multipart',
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3MultipartSerialization.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Last part number uploaded',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartSerialization.prototype, "partNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 200,
        description: 'Max part number, or length of the chunk',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartSerialization.prototype, "maxPartNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        oneOf: [
            {
                $ref: (0, swagger_1.getSchemaPath)(AwsS3MultipartPartsSerialization),
                type: 'array',
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => AwsS3MultipartPartsSerialization),
    __metadata("design:type", Array)
], AwsS3MultipartSerialization.prototype, "parts", void 0);
exports.AwsS3MultipartSerialization = AwsS3MultipartSerialization;
//# sourceMappingURL=aws.s3-multipart.serialization.js.map