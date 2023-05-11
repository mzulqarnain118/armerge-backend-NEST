import { UserCreateDto } from './user.create.dto';
declare const UserSignUpDto_base: import("@nestjs/common").Type<Omit<UserCreateDto, "role" | "signUpFrom">>;
export declare class UserSignUpDto extends UserSignUpDto_base {
}
export {};
