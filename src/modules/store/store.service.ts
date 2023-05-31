import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreRepository } from './repository/store.repository';
import { StoreDoc } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  create(createStoreDto: CreateStoreDto) {
    return 'This action adds a new store';
  }

  findAll() {
    return `This action returns all store`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }

  async addTeamMember() {
    return;
  }

  async findByShop(shop: string): Promise<StoreDoc> {
    return this.storeRepository.findOne({ shop });
  }
}
