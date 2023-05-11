"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("./app.config"));
const auth_config_1 = __importDefault(require("./auth.config"));
const database_config_1 = __importDefault(require("./database.config"));
const helper_config_1 = __importDefault(require("./helper.config"));
const aws_config_1 = __importDefault(require("./aws.config"));
const user_config_1 = __importDefault(require("./user.config"));
const file_config_1 = __importDefault(require("./file.config"));
const request_config_1 = __importDefault(require("./request.config"));
const doc_config_1 = __importDefault(require("./doc.config"));
const debugger_config_1 = __importDefault(require("./debugger.config"));
const message_config_1 = __importDefault(require("./message.config"));
exports.default = [
    app_config_1.default,
    auth_config_1.default,
    database_config_1.default,
    helper_config_1.default,
    aws_config_1.default,
    user_config_1.default,
    request_config_1.default,
    file_config_1.default,
    doc_config_1.default,
    debugger_config_1.default,
    message_config_1.default,
];
//# sourceMappingURL=index.js.map