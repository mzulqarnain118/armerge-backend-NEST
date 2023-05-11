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
exports.MigrationApiKeySeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const api_key_service_1 = require("../../common/api-key/services/api-key.service");
const api_key_enum_constant_1 = require("../../common/api-key/constants/api-key.enum.constant");
let MigrationApiKeySeed = class MigrationApiKeySeed {
    constructor(apiKeyService) {
        this.apiKeyService = apiKeyService;
    }
    async seeds() {
        try {
            await this.apiKeyService.createRaw({
                name: 'Api Key Migration',
                type: api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC,
                key: '2ihKDneb9jQGgidAOqfO',
                secret: 'ZLCtDd2rh3TAyVhfAeo3JOPvWfAsTp0Oq6rHl69D',
            });
            await this.apiKeyService.createRaw({
                name: 'Api Key Migration',
                type: api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC,
                key: 'XL6kCmBw0ice0FszxVPc',
                secret: '6WhgBRZytEYcmFWmRQxxOMr8NRJnnmcHQUkSAHMn',
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.apiKeyService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:apikey',
        describe: 'seeds apikeys',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationApiKeySeed.prototype, "seeds", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:apikey',
        describe: 'remove apikeys',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationApiKeySeed.prototype, "remove", null);
MigrationApiKeySeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService])
], MigrationApiKeySeed);
exports.MigrationApiKeySeed = MigrationApiKeySeed;
//# sourceMappingURL=migration.api-key.seed.js.map