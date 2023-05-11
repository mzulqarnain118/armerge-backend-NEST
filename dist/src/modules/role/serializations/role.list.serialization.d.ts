import { RoleGetSerialization } from './role.get.serialization';
declare const RoleListSerialization_base: import("@nestjs/common").Type<Omit<RoleGetSerialization, "permissions">>;
export declare class RoleListSerialization extends RoleListSerialization_base {
    permissions: number;
}
export {};
