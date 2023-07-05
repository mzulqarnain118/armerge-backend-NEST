import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { PassportModule } from '@nestjs/passport';
// import { ShopifyStrategy } from './shopify.strategy';
import { StoreRepositoryModule } from './repository/store.repository.module';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'shopify' }),
        StoreRepositoryModule,
    ],
    exports: [StoreService],
    providers: [StoreService,
        // ShopifyStrategy
    ],
})
export class StoreModule {}
