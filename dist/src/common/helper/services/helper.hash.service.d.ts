import { IHelperHashService } from 'src/common/helper/interfaces/helper.hash-service.interface';
export declare class HelperHashService implements IHelperHashService {
    randomSalt(length: number): string;
    bcrypt(passwordString: string, salt: string): string;
    bcryptCompare(passwordString: string, passwordHashed: string): boolean;
    sha256(string: string): string;
    sha256Compare(hashOne: string, hashTwo: string): boolean;
}
