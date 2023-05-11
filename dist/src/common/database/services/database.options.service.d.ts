import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { IDatabaseOptionsService } from 'src/common/database/interfaces/database.options-service.interface';
export declare class DatabaseOptionsService implements IDatabaseOptionsService {
    private readonly configService;
    constructor(configService: ConfigService);
    createOptions(): MongooseModuleOptions;
}
