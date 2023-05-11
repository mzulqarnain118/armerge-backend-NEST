"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMongoObjectIdEntityAbstract = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const database_base_entity_abstract_1 = require("../../database.base-entity.abstract");
const database_constant_1 = require("../../../constants/database.constant");
const database_function_constant_1 = require("../../../constants/database.function.constant");
class DatabaseMongoObjectIdEntityAbstract extends database_base_entity_abstract_1.DatabaseBaseEntityAbstract {
    static { _a = database_constant_1.DATABASE_DELETED_AT_FIELD_NAME, _b = database_constant_1.DATABASE_CREATED_AT_FIELD_NAME, _c = database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME; }
}
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        default: database_function_constant_1.DatabaseDefaultObjectId,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DatabaseMongoObjectIdEntityAbstract.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], DatabaseMongoObjectIdEntityAbstract.prototype, _a, void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: 'asc',
        type: Date,
    }),
    __metadata("design:type", Date)
], DatabaseMongoObjectIdEntityAbstract.prototype, _b, void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: 'desc',
        type: Date,
    }),
    __metadata("design:type", Date)
], DatabaseMongoObjectIdEntityAbstract.prototype, _c, void 0);
exports.DatabaseMongoObjectIdEntityAbstract = DatabaseMongoObjectIdEntityAbstract;
//# sourceMappingURL=database.mongo.object-id.entity.abstract.js.map