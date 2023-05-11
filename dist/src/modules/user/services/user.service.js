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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../repository/entities/user.entity");
const user_repository_1 = require("../repository/repositories/user.repository");
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const config_1 = require("@nestjs/config");
const helper_string_service_1 = require("../../../common/helper/services/helper.string.service");
const user_payload_serialization_1 = require("../serializations/user.payload.serialization");
const class_transformer_1 = require("class-transformer");
const role_entity_1 = require("../../role/repository/entities/role.entity");
let UserService = class UserService {
    constructor(userRepository, helperDateService, helperStringService, configService) {
        this.userRepository = userRepository;
        this.helperDateService = helperDateService;
        this.helperStringService = helperStringService;
        this.configService = configService;
        this.uploadPath = this.configService.get('user.uploadPath');
        this.authMaxPasswordAttempt = this.configService.get('auth.password.maxAttempt');
    }
    async findAll(find, options) {
        return this.userRepository.findAll(find, {
            ...options,
            join: true,
        });
    }
    async findOneById(_id, options) {
        return this.userRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.userRepository.findOne(find, options);
    }
    async findOneByUsername(username, options) {
        return this.userRepository.findOne({ username }, options);
    }
    async findOneByEmail(email, options) {
        return this.userRepository.findOne({ email }, options);
    }
    async findOneByMobileNumber(mobileNumber, options) {
        return this.userRepository.findOne({ mobileNumber }, options);
    }
    async getTotal(find, options) {
        return this.userRepository.getTotal(find, { ...options, join: true });
    }
    async create({ firstName, lastName, email, mobileNumber, role, signUpFrom, }, { passwordExpired, passwordHash, salt, passwordCreated }, options) {
        const create = new user_entity_1.UserEntity();
        create.firstName = firstName;
        create.email = email;
        create.password = passwordHash;
        create.role = role;
        create.isActive = true;
        create.inactivePermanent = false;
        create.blocked = false;
        create.lastName = lastName;
        create.salt = salt;
        create.passwordExpired = passwordExpired;
        create.passwordCreated = passwordCreated;
        create.signUpDate = this.helperDateService.create();
        create.passwordAttempt = 0;
        create.mobileNumber = mobileNumber ?? undefined;
        create.signUpFrom = signUpFrom;
        return this.userRepository.create(create, options);
    }
    async existByEmail(email, options) {
        return this.userRepository.exists({
            email: {
                $regex: new RegExp(`\\b${email}\\b`),
                $options: 'i',
            },
        }, { ...options, withDeleted: true });
    }
    async existByMobileNumber(mobileNumber, options) {
        return this.userRepository.exists({
            mobileNumber,
        }, { ...options, withDeleted: true });
    }
    async existByUsername(username, options) {
        return this.userRepository.exists({ username }, { ...options, withDeleted: true });
    }
    async delete(repository, options) {
        return this.userRepository.softDelete(repository, options);
    }
    async updateName(repository, { firstName, lastName }, options) {
        repository.firstName = firstName;
        repository.lastName = lastName;
        return this.userRepository.save(repository, options);
    }
    async updateUsername(repository, { username }, options) {
        repository.username = username;
        return this.userRepository.save(repository, options);
    }
    async updateGoogleSSO(repository, { accessToken, refreshToken }, options) {
        repository.google = {
            accessToken,
            refreshToken,
        };
        return this.userRepository.save(repository, options);
    }
    async updatePhoto(repository, photo, options) {
        repository.photo = photo;
        return this.userRepository.save(repository, options);
    }
    async updatePassword(repository, { passwordHash, passwordExpired, salt, passwordCreated }, options) {
        repository.password = passwordHash;
        repository.passwordExpired = passwordExpired;
        repository.passwordCreated = passwordCreated;
        repository.salt = salt;
        return this.userRepository.save(repository, options);
    }
    async active(repository, options) {
        repository.isActive = true;
        repository.inactiveDate = undefined;
        return this.userRepository.save(repository, options);
    }
    async inactive(repository, options) {
        repository.isActive = false;
        repository.inactiveDate = this.helperDateService.create();
        return this.userRepository.save(repository, options);
    }
    async inactivePermanent(repository, options) {
        repository.isActive = false;
        repository.inactivePermanent = true;
        repository.inactiveDate = this.helperDateService.create();
        return this.userRepository.save(repository, options);
    }
    async blocked(repository, options) {
        repository.blocked = true;
        repository.blockedDate = this.helperDateService.create();
        return this.userRepository.save(repository, options);
    }
    async unblocked(repository, options) {
        repository.blocked = false;
        repository.blockedDate = undefined;
        return this.userRepository.save(repository, options);
    }
    async maxPasswordAttempt(repository, options) {
        repository.passwordAttempt = this.authMaxPasswordAttempt;
        return this.userRepository.save(repository, options);
    }
    async increasePasswordAttempt(repository, options) {
        repository.passwordAttempt = ++repository.passwordAttempt;
        return this.userRepository.save(repository, options);
    }
    async resetPasswordAttempt(repository, options) {
        repository.passwordAttempt = 0;
        return this.userRepository.save(repository, options);
    }
    async updatePasswordExpired(repository, passwordExpired, options) {
        repository.passwordExpired = passwordExpired;
        return this.userRepository.save(repository, options);
    }
    async joinWithRole(repository) {
        return repository.populate({
            path: 'role',
            localField: 'role',
            foreignField: '_id',
            model: role_entity_1.RoleEntity.name,
        });
    }
    async createPhotoFilename() {
        const filename = this.helperStringService.random(20);
        return {
            path: this.uploadPath,
            filename: filename,
        };
    }
    async payloadSerialization(data) {
        return (0, class_transformer_1.plainToInstance)(user_payload_serialization_1.UserPayloadSerialization, data.toObject());
    }
    async import(data, role, { passwordCreated, passwordHash, salt }, options) {
        const passwordExpired = this.helperDateService.backwardInDays(1);
        const users = data.map(({ email, firstName, lastName, mobileNumber, signUpFrom }) => {
            const create = new user_entity_1.UserEntity();
            create.firstName = firstName;
            create.email = email;
            create.password = passwordHash;
            create.role = role;
            create.isActive = true;
            create.inactivePermanent = false;
            create.blocked = false;
            create.lastName = lastName;
            create.salt = salt;
            create.passwordExpired = passwordExpired;
            create.passwordCreated = passwordCreated;
            create.signUpDate = this.helperDateService.create();
            create.passwordAttempt = 0;
            create.mobileNumber = mobileNumber ?? undefined;
            create.signUpFrom = signUpFrom;
            return create;
        });
        return this.userRepository.createMany(users, options);
    }
    async deleteMany(find, options) {
        return this.userRepository.deleteMany(find, options);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        helper_date_service_1.HelperDateService,
        helper_string_service_1.HelperStringService,
        config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map