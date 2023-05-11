import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class RequestUrlencodedBodyParserMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly maxFile;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
export declare class RequestJsonBodyParserMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly maxFile;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
export declare class RequestRawBodyParserMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly maxFile;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
export declare class RequestTextBodyParserMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly maxFile;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
