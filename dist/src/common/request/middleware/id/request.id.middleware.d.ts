import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class RequestIdMiddleware implements NestMiddleware {
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
