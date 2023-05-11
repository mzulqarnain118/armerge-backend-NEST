import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, NextFunction } from 'express';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class RequestVersionMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly versioningEnable;
    private readonly versioningGlobalPrefix;
    private readonly versioningPrefix;
    private readonly versioningVersion;
    private readonly repoVersion;
    constructor(configService: ConfigService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
