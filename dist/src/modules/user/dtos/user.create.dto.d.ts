import { ENUM_USER_SIGN_UP_FROM } from 'src/modules/user/constants/user.enum.constant';
export declare class UserCreateDto {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly mobileNumber?: string;
    readonly role: string;
    readonly password: string;
    readonly signUpFrom: ENUM_USER_SIGN_UP_FROM;
}
