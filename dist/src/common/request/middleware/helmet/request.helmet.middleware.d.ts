import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class RequestHelmetMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
