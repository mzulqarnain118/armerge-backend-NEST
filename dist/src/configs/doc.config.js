"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('doc', () => ({
    name: `${process.env.APP_NAME} APIs Specification`,
    description: 'Section for describe whole APIs',
    version: '1.0',
    prefix: '/docs',
}));
//# sourceMappingURL=doc.config.js.map