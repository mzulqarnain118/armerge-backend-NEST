import '@shopify/shopify-api/adapters/node';
import { shopifyApi, ApiVersion, BillingInterval, LogFunction } from '@shopify/shopify-api';
import { restResources } from '@shopify/shopify-api/rest/admin/2022-07';

function myAppsLogFunction(severity: any, message: any): LogFunction {
  console.log(severity, message);
  return null;
}
const shopify = shopifyApi({
    apiKey: 'dafede6bd5b93e3f438027d99291ef15', //APP CLIENT_ID     3171c9ba54169457ba26cf189bce7be4
    apiSecretKey: 'b6190b832ba4344cf23e02d43457ede9', //APP CLIENT_SECRET   541213913b6b41b07fbd7f8fbeabc899
    scopes: ['read_products'],
    hostName: 'localhost:4321',
    hostScheme: 'http',
    apiVersion: ApiVersion.July22,
    isEmbeddedApp: true,
    userAgentPrefix: 'Custom prefix',
    privateAppStorefrontAccessToken: 'PrivateAccessToken',
    customShopDomains: ['*.my-custom-domain.io'],
    billing: {
        'My plan': {
            amount: 5.0,
            currencyCode: 'USD',
            interval: BillingInterval.OneTime,
        },
    },

    restResources,
});

export default shopify;
