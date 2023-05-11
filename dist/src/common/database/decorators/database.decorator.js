"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseEntity = exports.DatabaseModel = exports.DatabaseConnection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../constants/database.constant");
function DatabaseConnection(connectionName) {
    return (0, mongoose_1.InjectConnection)(connectionName ?? database_constant_1.DATABASE_CONNECTION_NAME);
}
exports.DatabaseConnection = DatabaseConnection;
function DatabaseModel(entity, connectionName) {
    return (0, mongoose_1.InjectModel)(entity, connectionName ?? database_constant_1.DATABASE_CONNECTION_NAME);
}
exports.DatabaseModel = DatabaseModel;
function DatabaseEntity(options) {
    return (0, mongoose_1.Schema)({
        ...options,
        versionKey: false,
        timestamps: {
            createdAt: database_constant_1.DATABASE_CREATED_AT_FIELD_NAME,
            updatedAt: database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME,
        },
    });
}
exports.DatabaseEntity = DatabaseEntity;
//# sourceMappingURL=database.decorator.js.map