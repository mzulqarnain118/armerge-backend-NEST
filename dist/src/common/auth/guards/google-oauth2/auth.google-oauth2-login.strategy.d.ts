import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { Profile } from 'passport';
declare const AuthGoogleOAuth2LoginStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthGoogleOAuth2LoginStrategy extends AuthGoogleOAuth2LoginStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any>;
}
export {};
