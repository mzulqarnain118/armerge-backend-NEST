"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const bytes_1 = __importDefault(require("bytes"));
exports.default = (0, config_1.registerAs)('file', () => ({
    image: {
        maxFileSize: (0, bytes_1.default)('1mb'),
        maxFiles: 3,
    },
    excel: {
        maxFileSize: (0, bytes_1.default)('5.5mb'),
        maxFiles: 1,
    },
    audio: {
        maxFileSize: (0, bytes_1.default)('5.5mb'),
        maxFiles: 1,
    },
    video: {
        maxFileSize: (0, bytes_1.default)('5.5mb'),
        maxFiles: 1,
    },
}));
//# sourceMappingURL=file.config.js.map