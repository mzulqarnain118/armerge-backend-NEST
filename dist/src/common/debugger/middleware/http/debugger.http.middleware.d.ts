import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class DebuggerHttpMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly writeIntoFile;
    private readonly writeIntoConsole;
    constructor(configService: ConfigService);
    private customToken;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class DebuggerHttpWriteIntoFileMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly helperDateService;
    private readonly writeIntoFile;
    private readonly maxSize;
    private readonly maxFiles;
    constructor(configService: ConfigService, helperDateService: HelperDateService);
    private httpLogger;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class DebuggerHttpWriteIntoConsoleMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly writeIntoConsole;
    constructor(configService: ConfigService);
    private httpLogger;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class DebuggerHttpResponseMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly writeIntoFile;
    private readonly writeIntoConsole;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
