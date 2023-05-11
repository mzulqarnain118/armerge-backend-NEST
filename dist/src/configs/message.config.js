"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const app_constant_1 = require("../app/constants/app.constant");
const message_enum_constant_1 = require("../common/message/constants/message.enum.constant");
exports.default = (0, config_1.registerAs)('message', () => ({
    availableLanguage: Object.values(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE),
    language: process.env.APP_LANGUAGE ?? app_constant_1.APP_LANGUAGE,
}));
//# sourceMappingURL=message.config.js.map