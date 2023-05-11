declare const AuthJwtAccessGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthJwtAccessGuard extends AuthJwtAccessGuard_base {
    handleRequest<TUser = any>(err: Error, user: TUser, info: Error): TUser;
}
export {};
