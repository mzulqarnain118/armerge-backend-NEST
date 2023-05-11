"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseDefaultObjectId = exports.DatabaseDefaultUUID = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
exports.DatabaseDefaultUUID = uuid_1.v4;
const DatabaseDefaultObjectId = () => new mongoose_1.Types.ObjectId();
exports.DatabaseDefaultObjectId = DatabaseDefaultObjectId;
//# sourceMappingURL=database.function.constant.js.map