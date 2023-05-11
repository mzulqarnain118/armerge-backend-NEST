"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('user', () => ({
    uploadPath: '/user',
    mobileNumberCountryCodeAllowed: ['628', '658'],
}));
//# sourceMappingURL=user.config.js.map