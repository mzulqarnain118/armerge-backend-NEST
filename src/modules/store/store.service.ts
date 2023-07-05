import { Injectable } from '@nestjs/common';
import { CreateStoreDto, getProductsDto } from './dto/create-store.dto';
import { StoreRepository } from './repository/store.repository';
import { StoreDoc } from './entities/store.entity';
// import { TeamMember } from './entities/team-member.entity';
import {
    IDatabaseCreateOptions,
    IDatabaseExistOptions,
    IDatabaseFindAllOptions,
    IDatabaseFindOneOptions,
    IDatabaseGetTotalOptions,
    IDatabaseManyOptions,
    IDatabaseCreateManyOptions,
    IDatabaseSaveOptions,
} from 'src/common/database/interfaces/database.interface';
@Injectable()
export class StoreService {
    constructor(private readonly storeRepository: StoreRepository) {}

    async create(createStoreDto: {
        connection: any;
        platform: any;
        shop: any;
    }) {
        const { platform, connection, shop } = createStoreDto;
        const store = await this.storeRepository.create({
            platform,
            connection: JSON.stringify(connection),
            shop,
        });
        return store;
    }

    async findAll() {
        const stores = await this.storeRepository.findAll();
        return stores;
    }

    // async findByID(id: string) {
    //   const store = await this.storeRepository.findById(id);
    //   return store;
    // }
    async findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions
    ): Promise<T> {
        return this.storeRepository.findOne<T>(find, options);
    }
    async findOneByShop<T>(
        shop: string,
        options?: IDatabaseFindOneOptions
    ): Promise<T> {
        return this.storeRepository.findOne<T>({ shop }, options);
    }
    async findOneById<T>(
        _id: string,
        options?: IDatabaseFindOneOptions
    ): Promise<T> {
        return this.storeRepository.findOneById<T>(_id, options);
    }
    // async update(id: number, updateStoreDto: UpdateStoreDto) {
    //   const store = await this.storeRepository.update(id, updateStoreDto);
    //   return store;
    // }

    // async remove(id: number) {
    //   const deletedStore = await this.storeRepository.remove(id);
    //   return deletedStore;
    // }

    // async addTeamMember(storeId: number, teamMember: TeamMember) {
    //   const store = await this.storeRepository.findOne(storeId);
    //   store.team.push(teamMember);
    //   await store.save();
    //   return store;
    // }

    async findByShop(shop: string): Promise<StoreDoc> {
        const store = await this.storeRepository.findOne({ shop });
        return store;
    }
}
