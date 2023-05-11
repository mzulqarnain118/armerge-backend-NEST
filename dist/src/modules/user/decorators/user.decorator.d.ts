export declare const GetUser: (...dataOrPipes: (boolean | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export declare function UserProtected(): MethodDecorator;
export declare function UserAuthProtected(): MethodDecorator;
