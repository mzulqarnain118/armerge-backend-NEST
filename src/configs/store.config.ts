import { registerAs } from '@nestjs/config';

export default registerAs('store', (): Record<string, any> => ({
    clientID: process.env.SHOPIFY_API_KEY,
    clientSecret: process.env.SHOPIFY_API_SECRET,
    callbackURL: process.env.SHOPIFY_CALLBACK_URL,
}));
