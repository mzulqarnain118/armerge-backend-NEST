import { UserCreateDto } from './user.create.dto';
declare const UserImportDto_base: import("@nestjs/common").Type<Omit<UserCreateDto, "role" | "password">>;
export declare class UserImportDto extends UserImportDto_base {
}
export {};
