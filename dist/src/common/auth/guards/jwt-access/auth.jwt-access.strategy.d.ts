import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/common/auth/services/auth.service';
declare const AuthJwtAccessStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthJwtAccessStrategy extends AuthJwtAccessStrategy_base {
    private readonly configService;
    private readonly authService;
    constructor(configService: ConfigService, authService: AuthService);
    validate({ data, }: Record<string, any>): Promise<Record<string, any>>;
}
export {};
