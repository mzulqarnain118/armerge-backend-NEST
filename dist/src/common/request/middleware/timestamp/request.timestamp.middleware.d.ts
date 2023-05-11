import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class RequestTimestampMiddleware implements NestMiddleware {
    private readonly helperNumberService;
    private readonly helperDateService;
    constructor(helperNumberService: HelperNumberService, helperDateService: HelperDateService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
