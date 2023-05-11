import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
import { MessageService } from 'src/common/message/services/message.service';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class MessageCustomLanguageMiddleware implements NestMiddleware {
    private readonly helperArrayService;
    private readonly messageService;
    constructor(helperArrayService: HelperArrayService, messageService: MessageService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
