declare const AuthGoogleOauth2SignUpGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthGoogleOauth2SignUpGuard extends AuthGoogleOauth2SignUpGuard_base {
    constructor();
    handleRequest<TUser = any>(err: Error, user: TUser, info: Error): TUser;
}
export {};
