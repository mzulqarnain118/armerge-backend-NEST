export declare const AuthJwtPayload: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export declare const AuthJwtToken: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export declare function AuthJwtAccessProtected(): MethodDecorator;
export declare function AuthJwtUserAccessProtected(): MethodDecorator;
export declare function AuthJwtAdminAccessProtected(): MethodDecorator;
export declare function AuthJwtRefreshProtected(): MethodDecorator;
