"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seconds = void 0;
const ms_1 = __importDefault(require("ms"));
function seconds(msValue) {
    return (0, ms_1.default)(msValue) / 1000;
}
exports.seconds = seconds;
//# sourceMappingURL=helper.function.constant.js.map