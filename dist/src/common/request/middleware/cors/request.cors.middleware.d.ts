import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class RequestCorsMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly appEnv;
    private readonly allowOrigin;
    private readonly allowMethod;
    private readonly allowHeader;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
