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
exports.MessageCustomLanguageMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helper_array_service_1 = require("../../../helper/services/helper.array.service");
const message_service_1 = require("../../services/message.service");
let MessageCustomLanguageMiddleware = class MessageCustomLanguageMiddleware {
    constructor(helperArrayService, messageService) {
        this.helperArrayService = helperArrayService;
        this.messageService = messageService;
    }
    async use(req, res, next) {
        let language = this.messageService.getLanguage();
        const availableLanguages = this.messageService.getAvailableLanguages();
        let customLang = [language];
        const reqLanguages = req.headers['x-custom-lang'];
        if (reqLanguages) {
            const splitLanguage = reqLanguages
                .split(',')
                .map((val) => val.toLowerCase());
            const languages = this.helperArrayService.filterIncludeUniqueByArray(availableLanguages, splitLanguage);
            if (languages.length > 0) {
                language = languages.join(',');
                customLang = languages;
            }
        }
        req.__customLang = customLang;
        req.__xCustomLang = language;
        req.headers['x-custom-lang'] = language;
        next();
    }
};
MessageCustomLanguageMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_array_service_1.HelperArrayService,
        message_service_1.MessageService])
], MessageCustomLanguageMiddleware);
exports.MessageCustomLanguageMiddleware = MessageCustomLanguageMiddleware;
//# sourceMappingURL=message.custom-language.middleware.js.map