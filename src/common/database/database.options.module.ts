import { Module } from '@nestjs/common';
import { DatabaseOptionsService } from 'src/common/database/services/database.options.service';

@Module({
    providers: [DatabaseOptionsService],
    exports: [DatabaseOptionsService],
})
export class DatabaseOptionsModule {}
