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
exports.HealthAwsS3Indicator = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const aws_s3_service_1 = require("../../common/aws/services/aws.s3.service");
let HealthAwsS3Indicator = class HealthAwsS3Indicator extends terminus_1.HealthIndicator {
    constructor(awsS3Service) {
        super();
        this.awsS3Service = awsS3Service;
    }
    async isHealthy(key) {
        try {
            await this.awsS3Service.checkBucketExistence();
            return this.getStatus(key, true);
        }
        catch (err) {
            throw new terminus_1.HealthCheckError('HealthAwsS3Indicator failed', this.getStatus(key, false));
        }
    }
};
HealthAwsS3Indicator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aws_s3_service_1.AwsS3Service])
], HealthAwsS3Indicator);
exports.HealthAwsS3Indicator = HealthAwsS3Indicator;
//# sourceMappingURL=health.aws-s3.indicator.js.map