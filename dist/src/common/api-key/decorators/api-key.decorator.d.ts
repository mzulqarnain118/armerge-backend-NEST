export declare const ApiKeyPayload: () => ParameterDecorator;
export declare function ApiKeyServiceProtected(): MethodDecorator;
export declare function ApiKeyPublicProtected(): MethodDecorator;
export declare const GetApiKey: (...dataOrPipes: (boolean | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
