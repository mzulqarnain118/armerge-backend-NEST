import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-shopify';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StoreService } from './store.service';

@Injectable()
export class ShopifyStrategy extends PassportStrategy(Strategy, 'shopify') {
    constructor(
        private readonly configService: ConfigService,
        private readonly storeService: StoreService
    ) {
        super({
            clientID: configService.get('SHOPIFY_API_KEY'),
            clientSecret: configService.get('SHOPIFY_API_SECRET'),
            callbackURL: configService.get('SHOPIFY_CALLBACK_URL'),
            scope: ['read_products', 'write_products'], // Add any additional required scopes
            shopifyAuthRoute: true,
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any
    ): Promise<any> {
        console.log('HERE');
        // Retrieve or create the store in the database
        const existingStore = await this.storeService.findByShop(
            profile._json.shop_domain
        );
        console.log(profile, " <<< PROFILE");
        console.log(existingStore, " <<< EXISTING Store")
        if (existingStore) {
            // Update the existing store's access token
            existingStore.accessToken = accessToken;
            await existingStore.save();
            return { accessToken, profile };
        } else {
            // Create a new store entry
            const newStore = { shop: profile._json.shop_domain, accessToken };
            const createdStore = await this.storeService.create(newStore);
            return { accessToken, profile };
        }
    }
}
