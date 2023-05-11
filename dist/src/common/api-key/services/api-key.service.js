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
exports.ApiKeyService = void 0;
const common_1 = require("@nestjs/common");
const api_key_entity_1 = require("../repository/entities/api-key.entity");
const api_key_repository_1 = require("../repository/repositories/api-key.repository");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
const config_1 = require("@nestjs/config");
const helper_hash_service_1 = require("../../helper/services/helper.hash.service");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
let ApiKeyService = class ApiKeyService {
    constructor(helperStringService, configService, helperHashService, helperDateService, apiKeyRepository) {
        this.helperStringService = helperStringService;
        this.configService = configService;
        this.helperHashService = helperHashService;
        this.helperDateService = helperDateService;
        this.apiKeyRepository = apiKeyRepository;
        this.env = this.configService.get('app.env');
    }
    async findAll(find, options) {
        return this.apiKeyRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.apiKeyRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.apiKeyRepository.findOne(find, options);
    }
    async findOneByKey(key, options) {
        return this.apiKeyRepository.findOne({ key }, options);
    }
    async findOneByActiveKey(key, options) {
        return this.apiKeyRepository.findOne({
            key,
            isActive: true,
        }, options);
    }
    async getTotal(find, options) {
        return this.apiKeyRepository.getTotal(find, options);
    }
    async create({ name, type, startDate, endDate }, options) {
        const key = await this.createKey();
        const secret = await this.createSecret();
        const hash = await this.createHashApiKey(key, secret);
        const dto = new api_key_entity_1.ApiKeyEntity();
        dto.name = name;
        dto.key = key;
        dto.hash = hash;
        dto.isActive = true;
        dto.type = type;
        if (startDate && endDate) {
            dto.startDate = this.helperDateService.startOfDay(startDate);
            dto.endDate = this.helperDateService.endOfDay(endDate);
        }
        const created = await this.apiKeyRepository.create(dto, options);
        return { doc: created, secret };
    }
    async createRaw({ name, key, type, secret, startDate, endDate }, options) {
        const hash = await this.createHashApiKey(key, secret);
        const dto = new api_key_entity_1.ApiKeyEntity();
        dto.name = name;
        dto.key = key;
        dto.hash = hash;
        dto.isActive = true;
        dto.type = type;
        if (startDate && endDate) {
            dto.startDate = this.helperDateService.startOfDay(startDate);
            dto.endDate = this.helperDateService.endOfDay(endDate);
        }
        const created = await this.apiKeyRepository.create(dto, options);
        return { doc: created, secret };
    }
    async active(repository, options) {
        repository.isActive = true;
        return this.apiKeyRepository.save(repository, options);
    }
    async inactive(repository, options) {
        repository.isActive = false;
        return this.apiKeyRepository.save(repository, options);
    }
    async update(repository, { name }, options) {
        repository.name = name;
        return this.apiKeyRepository.save(repository, options);
    }
    async updateDate(repository, { startDate, endDate }, options) {
        repository.startDate = this.helperDateService.startOfDay(startDate);
        repository.endDate = this.helperDateService.endOfDay(endDate);
        return this.apiKeyRepository.save(repository, options);
    }
    async reset(repository, secret, options) {
        const hash = await this.createHashApiKey(repository.key, secret);
        repository.hash = hash;
        return this.apiKeyRepository.save(repository, options);
    }
    async delete(repository, options) {
        return this.apiKeyRepository.softDelete(repository, options);
    }
    async validateHashApiKey(hashFromRequest, hash) {
        return this.helperHashService.sha256Compare(hashFromRequest, hash);
    }
    async createKey() {
        return this.helperStringService.random(25, {
            safe: false,
            upperCase: true,
            prefix: `${this.env}_`,
        });
    }
    async createSecret() {
        return this.helperStringService.random(35, {
            safe: false,
            upperCase: true,
        });
    }
    async createHashApiKey(key, secret) {
        return this.helperHashService.sha256(`${key}:${secret}`);
    }
    async deleteMany(find, options) {
        return this.apiKeyRepository.deleteMany(find, options);
    }
    async inactiveManyByEndDate(options) {
        return this.apiKeyRepository.updateMany({
            endDate: {
                $lte: this.helperDateService.create(),
            },
            isActive: true,
        }, {
            isActive: false,
        }, options);
    }
};
ApiKeyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_string_service_1.HelperStringService,
        config_1.ConfigService,
        helper_hash_service_1.HelperHashService,
        helper_date_service_1.HelperDateService,
        api_key_repository_1.ApiKeyRepository])
], ApiKeyService);
exports.ApiKeyService = ApiKeyService;
//# sourceMappingURL=api-key.service.js.map