import { Logger } from 'winston';
import { IDebuggerLog } from 'src/common/debugger/interfaces/debugger.interface';
import { IDebuggerService } from 'src/common/debugger/interfaces/debugger.service.interface';
export declare class DebuggerService implements IDebuggerService {
    private readonly logger;
    constructor(logger: Logger);
    info(requestId: string, log: IDebuggerLog, data?: any): void;
    debug(requestId: string, log: IDebuggerLog, data?: any): void;
    warn(requestId: string, log: IDebuggerLog, data?: any): void;
    error(requestId: string, log: IDebuggerLog, data?: any): void;
}
