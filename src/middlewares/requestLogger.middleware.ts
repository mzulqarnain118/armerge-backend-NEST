import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.body, " < Request body");
        //console.log(req.params, " < Req Params");
        console.log(req.headers, " < Req Headers")
        // console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
        next();
    }
}
