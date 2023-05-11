"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('debugger', () => ({
    http: {
        writeIntoFile: process.env.DEBUGGER_HTTP_WRITE_INTO_FILE === 'true',
        writeIntoConsole: process.env.DEBUGGER_HTTP_WRITE_INTO_CONSOLE === 'true',
        maxFiles: 5,
        maxSize: '2M',
    },
    system: {
        writeIntoFile: process.env.DEBUGGER_SYSTEM_WRITE_INTO_FILE === 'true',
        writeIntoConsole: process.env.DEBUGGER_SYSTEM_WRITE_INTO_CONSOLE === 'true',
        maxFiles: '7d',
        maxSize: '2m',
    },
}));
//# sourceMappingURL=debugger.config.js.map