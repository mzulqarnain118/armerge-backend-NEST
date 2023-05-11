import { JwtService } from '@nestjs/jwt';
import { IHelperEncryptionService } from 'src/common/helper/interfaces/helper.encryption-service.interface';
import { IHelperJwtOptions, IHelperJwtVerifyOptions } from 'src/common/helper/interfaces/helper.interface';
export declare class HelperEncryptionService implements IHelperEncryptionService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    base64Encrypt(data: string): string;
    base64Decrypt(data: string): string;
    base64Compare(clientBasicToken: string, ourBasicToken: string): boolean;
    aes256Encrypt(data: string | Record<string, any> | Record<string, any>[], key: string, iv: string): string;
    aes256Decrypt(encrypted: string, key: string, iv: string): string | Record<string, any> | Record<string, any>[];
    jwtEncrypt(payload: Record<string, any>, options: IHelperJwtOptions): string;
    jwtDecrypt(token: string): Record<string, any>;
    jwtVerify(token: string, options: IHelperJwtVerifyOptions): boolean;
}
