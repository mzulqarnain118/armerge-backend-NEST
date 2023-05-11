export declare function UploadFileSingle(field: string): MethodDecorator;
export declare function UploadFileMultiple(field: string): MethodDecorator;
export declare function FileCustomMaxFile(customMaxFiles: number): MethodDecorator;
export declare function FileCustomMaxSize(customMaxSize: string): MethodDecorator;
export declare const FilePartNumber: () => ParameterDecorator;
