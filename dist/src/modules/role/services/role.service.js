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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const role_entity_1 = require("../repository/entities/role.entity");
const role_repository_1 = require("../repository/repositories/role.repository");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async findAll(find, options) {
        return this.roleRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.roleRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.roleRepository.findOne(find, options);
    }
    async findOneByName(name, options) {
        return this.roleRepository.findOne({ name }, options);
    }
    async getTotal(find, options) {
        return this.roleRepository.getTotal(find, options);
    }
    async existByName(name, options) {
        return this.roleRepository.exists({
            name,
        }, { ...options, withDeleted: true });
    }
    async create({ name, description, type, permissions }, options) {
        const create = new role_entity_1.RoleEntity();
        create.name = name;
        create.description = description;
        create.type = type;
        create.permissions = permissions;
        create.isActive = true;
        return this.roleRepository.create(create, options);
    }
    async update(repository, { description }, options) {
        repository.description = description;
        return this.roleRepository.save(repository, options);
    }
    async updatePermissions(repository, { permissions, type }, options) {
        repository.permissions = permissions;
        repository.type = type;
        return this.roleRepository.save(repository, options);
    }
    async active(repository, options) {
        repository.isActive = true;
        return this.roleRepository.save(repository, options);
    }
    async inactive(repository, options) {
        repository.isActive = false;
        return this.roleRepository.save(repository, options);
    }
    async delete(repository, options) {
        return this.roleRepository.softDelete(repository, options);
    }
    async deleteMany(find, options) {
        return this.roleRepository.deleteMany(find, options);
    }
    async createMany(data, options) {
        const create = data.map(({ type, name, permissions }) => {
            const entity = new role_entity_1.RoleEntity();
            entity.type = type;
            entity.isActive = true;
            entity.name = name;
            entity.permissions = permissions;
            return entity;
        });
        return this.roleRepository.createMany(create, options);
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map