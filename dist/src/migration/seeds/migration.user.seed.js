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
exports.MigrationUserSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../common/auth/services/auth.service");
const user_service_1 = require("../../modules/user/services/user.service");
const role_service_1 = require("../../modules/role/services/role.service");
const user_enum_constant_1 = require("../../modules/user/constants/user.enum.constant");
let MigrationUserSeed = class MigrationUserSeed {
    constructor(authService, userService, roleService) {
        this.authService = authService;
        this.userService = userService;
        this.roleService = roleService;
    }
    async seeds() {
        const password = 'aaAA@@123444';
        const superadminRole = await this.roleService.findOneByName('superadmin');
        const adminRole = await this.roleService.findOneByName('admin');
        const memberRole = await this.roleService.findOneByName('member');
        const userRole = await this.roleService.findOneByName('user');
        const passwordHash = await this.authService.createPassword('aaAA@@123444');
        const user1 = this.userService.create({
            firstName: 'superadmin',
            lastName: 'test',
            email: 'superadmin@mail.com',
            password,
            mobileNumber: '08111111222',
            signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
            role: superadminRole._id,
        }, passwordHash);
        const user2 = this.userService.create({
            firstName: 'admin',
            lastName: 'test',
            email: 'admin@mail.com',
            password,
            signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
            role: adminRole._id,
        }, passwordHash);
        const user3 = this.userService.create({
            firstName: 'user',
            lastName: 'test',
            email: 'user@mail.com',
            password,
            signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
            role: userRole._id,
        }, passwordHash);
        const user4 = this.userService.create({
            firstName: 'member',
            lastName: 'test',
            email: 'member@mail.com',
            password,
            signUpFrom: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
            role: memberRole._id,
        }, passwordHash);
        try {
            await Promise.all([user1, user2, user3, user4]);
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.userService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:user',
        describe: 'seed users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationUserSeed.prototype, "seeds", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:user',
        describe: 'remove users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationUserSeed.prototype, "remove", null);
MigrationUserSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        role_service_1.RoleService])
], MigrationUserSeed);
exports.MigrationUserSeed = MigrationUserSeed;
//# sourceMappingURL=migration.user.seed.js.map