import { UserCreateDto } from 'src/modules/user/dtos/user.create.dto';
declare const UserLoginDto_base: import("@nestjs/common").Type<Pick<UserCreateDto, "email" | "password">>;
export declare class UserLoginDto extends UserLoginDto_base {
}
export {};
