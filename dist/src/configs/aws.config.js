"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('aws', () => ({
    credential: {
        key: process.env.AWS_CREDENTIAL_KEY,
        secret: process.env.AWS_CREDENTIAL_SECRET,
    },
    s3: {
        bucket: process.env.AWS_S3_BUCKET ?? 'bucket',
        region: process.env.AWS_S3_REGION,
        baseUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com`,
    },
}));
//# sourceMappingURL=aws.config.js.map