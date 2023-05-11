"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationRoleSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const policy_enum_constant_1 = require("../../common/policy/constants/policy.enum.constant");
const role_service_1 = require("../../modules/role/services/role.service");
const role_enum_constant_1 = require("../../modules/role/constants/role.enum.constant");
let MigrationRoleSeed = class MigrationRoleSeed {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async seeds() {
        const dataAdmin = [
            {
                name: 'superadmin',
                type: role_enum_constant_1.ENUM_ROLE_TYPE.SUPER_ADMIN,
                permissions: [],
            },
            {
                name: 'admin',
                type: role_enum_constant_1.ENUM_ROLE_TYPE.ADMIN,
                permissions: Object.values(policy_enum_constant_1.ENUM_POLICY_SUBJECT).map((val) => ({
                    subject: val,
                    action: [policy_enum_constant_1.ENUM_POLICY_ACTION.MANAGE],
                })),
            },
            {
                name: 'member',
                type: role_enum_constant_1.ENUM_ROLE_TYPE.USER,
                permissions: [
                    {
                        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
                        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.MANAGE],
                    },
                ],
            },
            {
                name: 'user',
                type: role_enum_constant_1.ENUM_ROLE_TYPE.USER,
                permissions: [],
            },
        ];
        try {
            await this.roleService.createMany(dataAdmin);
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.roleService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:role',
        describe: 'seed roles',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationRoleSeed.prototype, "seeds", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:role',
        describe: 'remove roles',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationRoleSeed.prototype, "remove", null);
MigrationRoleSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], MigrationRoleSeed);
exports.MigrationRoleSeed = MigrationRoleSeed;
//# sourceMappingURL=migration.role.seed.js.map