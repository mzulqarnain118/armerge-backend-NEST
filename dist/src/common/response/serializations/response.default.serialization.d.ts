import { IMessage } from 'src/common/message/interfaces/message.interface';
export declare class ResponseMetadataSerialization {
    languages: string[];
    timestamp: number;
    timezone: string;
    requestId: string;
    path: string;
    version: string;
    repoVersion: string;
    [key: string]: any;
}
export declare class ResponseDefaultSerialization<T = Record<string, any>> {
    statusCode: number;
    message: string | IMessage;
    _metadata?: ResponseMetadataSerialization;
    data?: T;
}
