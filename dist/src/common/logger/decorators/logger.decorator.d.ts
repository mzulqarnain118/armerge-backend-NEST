import { ENUM_LOGGER_ACTION } from 'src/common/logger/constants/logger.enum.constant';
import { ILoggerOptions } from 'src/common/logger/interfaces/logger.interface';
export declare function Logger(action: ENUM_LOGGER_ACTION, options?: ILoggerOptions): MethodDecorator;
