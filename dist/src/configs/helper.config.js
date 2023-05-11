"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const helper_function_constant_1 = require("../common/helper/constants/helper.function.constant");
exports.default = (0, config_1.registerAs)('helper', () => ({
    salt: {
        length: 8,
    },
    jwt: {
        secretKey: '123456',
        expirationTime: (0, helper_function_constant_1.seconds)('1h'),
        notBeforeExpirationTime: (0, helper_function_constant_1.seconds)('0'),
    },
}));
//# sourceMappingURL=helper.config.js.map