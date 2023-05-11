declare const AuthGoogleOauth2LoginGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthGoogleOauth2LoginGuard extends AuthGoogleOauth2LoginGuard_base {
    constructor();
    handleRequest<TUser = any>(err: Error, user: TUser, info: Error): TUser;
}
export {};
