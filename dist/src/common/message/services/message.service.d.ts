import { ConfigService } from '@nestjs/config';
import { ValidationError } from 'class-validator';
import { I18nService } from 'nestjs-i18n';
import { IErrors, IErrorsImport, IValidationErrorImport } from 'src/common/error/interfaces/error.interface';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
import { IMessageErrorOptions, IMessageOptions, IMessageSetOptions } from 'src/common/message/interfaces/message.interface';
import { IMessageService } from 'src/common/message/interfaces/message.service.interface';
export declare class MessageService implements IMessageService {
    private readonly i18n;
    private readonly configService;
    private readonly helperArrayService;
    private readonly appDefaultLanguage;
    private readonly appDefaultAvailableLanguage;
    constructor(i18n: I18nService, configService: ConfigService, helperArrayService: HelperArrayService);
    getAvailableLanguages(): string[];
    getLanguage(): string;
    filterLanguage(customLanguages: string[]): string[];
    setMessage(lang: string, key: string, options?: IMessageSetOptions): string;
    getRequestErrorsMessage(requestErrors: ValidationError[], options?: IMessageErrorOptions): IErrors[];
    getImportErrorsMessage(errors: IValidationErrorImport[], options?: IMessageErrorOptions): IErrorsImport[];
    get<T = string>(key: string, options?: IMessageOptions): T;
}
