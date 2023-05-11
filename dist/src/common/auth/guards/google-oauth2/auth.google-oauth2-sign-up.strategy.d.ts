import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { Profile } from 'passport';
declare const AuthGoogleOAuth2SignUpStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthGoogleOAuth2SignUpStrategy extends AuthGoogleOAuth2SignUpStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any>;
}
export {};
