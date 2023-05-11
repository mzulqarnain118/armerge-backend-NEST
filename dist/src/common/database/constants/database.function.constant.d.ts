import { Types } from 'mongoose';
export declare const DatabaseDefaultUUID: (<T extends ArrayLike<number>>(options: import("uuid").V4Options, buffer: T, offset?: number) => T) & ((options?: import("uuid").V4Options) => string);
export declare const DatabaseDefaultObjectId: () => Types.ObjectId;
