declare const AuthJwtRefreshGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthJwtRefreshGuard extends AuthJwtRefreshGuard_base {
    handleRequest<TUser = any>(err: Error, user: TUser, info: Error): TUser;
}
export {};
