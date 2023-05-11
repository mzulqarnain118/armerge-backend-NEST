import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { IResult } from 'ua-parser-js';
export declare class AppController {
    private readonly configService;
    private readonly helperDateService;
    private readonly serviceName;
    constructor(configService: ConfigService, helperDateService: HelperDateService);
    hello(userAgent: IResult): Promise<IResponse>;
    helloApiKey(userAgent: IResult): Promise<IResponse>;
}
