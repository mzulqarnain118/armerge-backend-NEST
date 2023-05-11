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
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_number_service_1 = require("../../helper/services/helper.number.service");
const setting_enum_constant_1 = require("../constants/setting.enum.constant");
const setting_entity_1 = require("../repository/entities/setting.entity");
const setting_repository_1 = require("../repository/repositories/setting.repository");
let SettingService = class SettingService {
    constructor(settingRepository, configService, helperNumberService) {
        this.settingRepository = settingRepository;
        this.configService = configService;
        this.helperNumberService = helperNumberService;
        this.mobileNumberCountryCodeAllowed = this.configService.get('user.mobileNumberCountryCodeAllowed');
        this.passwordAttempt = this.configService.get('auth.password.attempt');
        this.maxPasswordAttempt = this.configService.get('auth.password.maxAttempt');
    }
    async findAll(find, options) {
        return this.settingRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.settingRepository.findOneById(_id, options);
    }
    async findOneByName(name, options) {
        return this.settingRepository.findOne({ name }, options);
    }
    async getTotal(find, options) {
        return this.settingRepository.getTotal(find, options);
    }
    async create({ name, description, type, value }, options) {
        const create = new setting_entity_1.SettingEntity();
        create.name = name;
        create.description = description ?? undefined;
        create.value = value;
        create.type = type;
        return this.settingRepository.create(create, options);
    }
    async updateValue(repository, { type, value }, options) {
        repository.type = type;
        repository.value = value;
        return this.settingRepository.save(repository, options);
    }
    async delete(repository, options) {
        return this.settingRepository.softDelete(repository, options);
    }
    async getValue(setting) {
        if (setting.type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.BOOLEAN &&
            (setting.value === 'true' || setting.value === 'false')) {
            return (setting.value === 'true');
        }
        else if (setting.type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.NUMBER &&
            this.helperNumberService.check(setting.value)) {
            return this.helperNumberService.create(setting.value);
        }
        else if (setting.type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.ARRAY_OF_STRING) {
            return setting.value.split(',');
        }
        return setting.value;
    }
    async checkValue(value, type) {
        if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.BOOLEAN &&
            (value === 'true' || value === 'false')) {
            return true;
        }
        else if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.NUMBER &&
            this.helperNumberService.check(value)) {
            return true;
        }
        else if ((type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.STRING ||
            type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.ARRAY_OF_STRING) &&
            typeof value === 'string') {
            return true;
        }
        return false;
    }
    async getMaintenance() {
        const setting = await this.settingRepository.findOne({
            name: 'maintenance',
        });
        return this.getValue(setting);
    }
    async getMobileNumberCountryCodeAllowed() {
        return this.mobileNumberCountryCodeAllowed;
    }
    async getPasswordAttempt() {
        return this.passwordAttempt;
    }
    async getMaxPasswordAttempt() {
        return this.maxPasswordAttempt;
    }
    async deleteMany(find, options) {
        return this.settingRepository.deleteMany(find, options);
    }
};
SettingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_repository_1.SettingRepository,
        config_1.ConfigService,
        helper_number_service_1.HelperNumberService])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.service.js.map