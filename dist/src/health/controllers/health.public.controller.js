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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthPublicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const terminus_1 = require("@nestjs/terminus");
const mongoose_1 = require("mongoose");
const database_decorator_1 = require("../../common/database/decorators/database.decorator");
const response_decorator_1 = require("../../common/response/decorators/response.decorator");
const health_doc_1 = require("../docs/health.doc");
const health_aws_s3_indicator_1 = require("../indicators/health.aws-s3.indicator");
const health_serialization_1 = require("../serializations/health.serialization");
let HealthPublicController = class HealthPublicController {
    constructor(databaseConnection, health, memoryHealthIndicator, diskHealthIndicator, mongooseIndicator, awsS3Indicator) {
        this.databaseConnection = databaseConnection;
        this.health = health;
        this.memoryHealthIndicator = memoryHealthIndicator;
        this.diskHealthIndicator = diskHealthIndicator;
        this.mongooseIndicator = mongooseIndicator;
        this.awsS3Indicator = awsS3Indicator;
    }
    async checkAws() {
        const data = await this.health.check([
            () => this.awsS3Indicator.isHealthy('awsS3Bucket'),
        ]);
        return {
            data,
        };
    }
    async checkDatabase() {
        const data = await this.health.check([
            () => this.mongooseIndicator.pingCheck('database', {
                connection: this.databaseConnection,
            }),
        ]);
        return {
            data,
        };
    }
    async checkMemoryHeap() {
        const data = await this.health.check([
            () => this.memoryHealthIndicator.checkHeap('memoryHeap', 300 * 1024 * 1024),
        ]);
        return {
            data,
        };
    }
    async checkMemoryRss() {
        const data = await this.health.check([
            () => this.memoryHealthIndicator.checkRSS('memoryRss', 300 * 1024 * 1024),
        ]);
        return {
            data,
        };
    }
    async checkStorage() {
        const data = await this.health.check([
            () => this.diskHealthIndicator.checkStorage('diskHealth', {
                thresholdPercent: 0.75,
                path: '/',
            }),
        ]);
        return {
            data,
        };
    }
};
__decorate([
    (0, health_doc_1.HealthCheckDoc)(),
    (0, response_decorator_1.Response)('health.check', { serialization: health_serialization_1.HealthSerialization }),
    (0, terminus_1.HealthCheck)(),
    (0, common_1.Get)('/aws'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthPublicController.prototype, "checkAws", null);
__decorate([
    (0, health_doc_1.HealthCheckDoc)(),
    (0, response_decorator_1.Response)('health.check', { serialization: health_serialization_1.HealthSerialization }),
    (0, terminus_1.HealthCheck)(),
    (0, common_1.Get)('/database'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthPublicController.prototype, "checkDatabase", null);
__decorate([
    (0, health_doc_1.HealthCheckDoc)(),
    (0, response_decorator_1.Response)('health.check', { serialization: health_serialization_1.HealthSerialization }),
    (0, terminus_1.HealthCheck)(),
    (0, common_1.Get)('/memory-heap'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthPublicController.prototype, "checkMemoryHeap", null);
__decorate([
    (0, health_doc_1.HealthCheckDoc)(),
    (0, response_decorator_1.Response)('health.check', { serialization: health_serialization_1.HealthSerialization }),
    (0, terminus_1.HealthCheck)(),
    (0, common_1.Get)('/memory-rss'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthPublicController.prototype, "checkMemoryRss", null);
__decorate([
    (0, health_doc_1.HealthCheckDoc)(),
    (0, response_decorator_1.Response)('health.check', { serialization: health_serialization_1.HealthSerialization }),
    (0, terminus_1.HealthCheck)(),
    (0, common_1.Get)('/storage'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthPublicController.prototype, "checkStorage", null);
HealthPublicController = __decorate([
    (0, swagger_1.ApiTags)('health'),
    (0, common_1.Controller)({
        version: common_1.VERSION_NEUTRAL,
        path: '/health',
    }),
    __param(0, (0, database_decorator_1.DatabaseConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Connection,
        terminus_1.HealthCheckService,
        terminus_1.MemoryHealthIndicator,
        terminus_1.DiskHealthIndicator,
        terminus_1.MongooseHealthIndicator,
        health_aws_s3_indicator_1.HealthAwsS3Indicator])
], HealthPublicController);
exports.HealthPublicController = HealthPublicController;
//# sourceMappingURL=health.public.controller.js.map