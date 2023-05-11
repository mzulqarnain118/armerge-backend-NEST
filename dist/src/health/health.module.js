"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthModule = void 0;
const common_1 = require("@nestjs/common");
const aws_module_1 = require("../common/aws/aws.module");
const health_aws_s3_indicator_1 = require("./indicators/health.aws-s3.indicator");
let HealthModule = class HealthModule {
};
HealthModule = __decorate([
    (0, common_1.Module)({
        providers: [health_aws_s3_indicator_1.HealthAwsS3Indicator],
        exports: [health_aws_s3_indicator_1.HealthAwsS3Indicator],
        imports: [aws_module_1.AwsModule],
    })
], HealthModule);
exports.HealthModule = HealthModule;
//# sourceMappingURL=health.module.js.map