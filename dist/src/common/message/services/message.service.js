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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_i18n_1 = require("nestjs-i18n");
const helper_array_service_1 = require("../../helper/services/helper.array.service");
let MessageService = class MessageService {
    constructor(i18n, configService, helperArrayService) {
        this.i18n = i18n;
        this.configService = configService;
        this.helperArrayService = helperArrayService;
        this.appDefaultLanguage =
            this.configService.get('message.language');
        this.appDefaultAvailableLanguage = this.configService.get('message.availableLanguage');
    }
    getAvailableLanguages() {
        return this.appDefaultAvailableLanguage;
    }
    getLanguage() {
        return this.appDefaultLanguage;
    }
    filterLanguage(customLanguages) {
        return this.helperArrayService.filterIncludeUniqueByArray(customLanguages, this.appDefaultAvailableLanguage);
    }
    setMessage(lang, key, options) {
        return this.i18n.translate(key, {
            lang: lang,
            args: options?.properties,
        });
    }
    getRequestErrorsMessage(requestErrors, options) {
        const messages = [];
        for (const requestError of requestErrors) {
            let children = requestError.children;
            let constraints = Object.keys(requestError.constraints);
            let property = requestError.property;
            let propertyValue = requestError.value;
            while (children.length > 0) {
                property = `${property}.${children[0].property}`;
                if (children[0].children?.length > 0) {
                    children = children[0].children;
                }
                else {
                    constraints = Object.keys(children[0].constraints);
                    propertyValue = children[0].value;
                    children = [];
                }
            }
            const errors = [];
            for (const constraint of constraints) {
                errors.push({
                    property,
                    message: this.get(`request.${constraint}`, {
                        customLanguages: options?.customLanguages,
                        properties: {
                            property,
                            value: propertyValue,
                        },
                    }),
                });
            }
            messages.push(errors);
        }
        return messages.flat(1);
    }
    getImportErrorsMessage(errors, options) {
        return errors.map((val) => ({
            row: val.row,
            file: val.file,
            errors: this.getRequestErrorsMessage(val.errors, options),
        }));
    }
    get(key, options) {
        const customLanguages = options?.customLanguages?.length > 0
            ? this.filterLanguage(options.customLanguages)
            : [this.appDefaultLanguage];
        if (customLanguages.length > 1) {
            return customLanguages.reduce((a, v) => ({
                ...a,
                [v]: this.setMessage(v, key, {
                    properties: options?.properties,
                }),
            }), {});
        }
        return this.setMessage(customLanguages[0], key, {
            properties: options?.properties,
        });
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nService,
        config_1.ConfigService,
        helper_array_service_1.HelperArrayService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map