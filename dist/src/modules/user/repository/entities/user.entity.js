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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserEntity = exports.UserDatabaseName = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const aws_s3_serialization_1 = require("../../../../common/aws/serializations/aws.s3.serialization");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const role_entity_1 = require("../../../role/repository/entities/role.entity");
const user_enum_constant_1 = require("../../constants/user.enum.constant");
exports.UserDatabaseName = 'users';
let UserEntity = class UserEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: false, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, mobileNumber: { required: false, type: () => String }, email: { required: true, type: () => String }, role: { required: true, type: () => String }, password: { required: true, type: () => String }, passwordExpired: { required: true, type: () => Date }, passwordCreated: { required: true, type: () => Date }, passwordAttempt: { required: true, type: () => Number }, signUpDate: { required: true, type: () => Date }, signUpFrom: { required: true, enum: require("../../constants/user.enum.constant").ENUM_USER_SIGN_UP_FROM }, salt: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, inactivePermanent: { required: true, type: () => Boolean }, inactiveDate: { required: false, type: () => Date }, blocked: { required: true, type: () => Boolean }, blockedDate: { required: false, type: () => Date }, photo: { required: false, type: () => require("../../../../common/aws/serializations/aws.s3.serialization").AwsS3Serialization }, google: { required: false, type: () => Object } };
    }
};
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        sparse: true,
        index: true,
        trim: true,
        type: String,
        unique: true,
        maxlength: 100,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        lowercase: true,
        trim: true,
        type: String,
        maxlength: 50,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        lowercase: true,
        trim: true,
        type: String,
        maxlength: 50,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        sparse: true,
        trim: true,
        unique: true,
        type: String,
        maxlength: 15,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "mobileNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        unique: true,
        trim: true,
        lowercase: true,
        type: String,
        maxlength: 100,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: role_entity_1.RoleEntity.name,
        index: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "passwordExpired", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "passwordCreated", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: 0,
        type: Number,
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "passwordAttempt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "signUpDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "signUpFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        index: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: false,
        index: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "inactivePermanent", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "inactiveDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: false,
        index: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "blocked", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "blockedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        _id: false,
        type: {
            path: String,
            pathWithFilename: String,
            filename: String,
            completedUrl: String,
            baseUrl: String,
            mime: String,
        },
    }),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserEntity.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        _id: false,
        type: {
            accessToken: String,
            refreshToken: String,
        },
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "google", void 0);
UserEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.UserDatabaseName })
], UserEntity);
exports.UserEntity = UserEntity;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserEntity);
exports.UserSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase();
    this.firstName = this.firstName.toLowerCase();
    this.lastName = this.lastName.toLowerCase();
    next();
});
//# sourceMappingURL=user.entity.js.map