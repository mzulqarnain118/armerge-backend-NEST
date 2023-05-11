"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const package_json_1 = require("../../package.json");
const app_enum_constant_1 = require("../app/constants/app.enum.constant");
exports.default = (0, config_1.registerAs)('app', () => ({
    name: process.env.APP_NAME ?? 'ack',
    env: process.env.APP_ENV ?? app_enum_constant_1.ENUM_APP_ENVIRONMENT.DEVELOPMENT,
    repoVersion: package_json_1.version,
    versioning: {
        enable: process.env.HTTP_VERSIONING_ENABLE === 'true' ?? false,
        prefix: 'v',
        version: process.env.HTTP_VERSION ?? '1',
    },
    globalPrefix: '/api',
    http: {
        enable: process.env.HTTP_ENABLE === 'true' ?? false,
        host: process.env.HTTP_HOST ?? 'localhost',
        port: process.env.HTTP_PORT
            ? Number.parseInt(process.env.HTTP_PORT)
            : 3000,
    },
    jobEnable: process.env.JOB_ENABLE === 'true' ?? false,
}));
//# sourceMappingURL=app.config.js.map