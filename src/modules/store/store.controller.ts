import { StoreService } from './store.service';
import { CreateStoreDto, getProductsDto } from './dto/create-store.dto';
import { Request, Response } from 'express';
import shopify from './shopify';
import {
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    ForbiddenException,
    Get,
    HttpCode,
    HttpStatus,
    InternalServerErrorException,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common';
import { platform } from 'os';
@Controller({
    version: '1',
    path: '/store',
})
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Post()
    create(@Body() { connection, platform, shop }: any) {
        console.log(
            '🚀 ~ file: store.controller.ts:37 ~ StoreController ~ create ~ connection, platform',
            connection,
            platform
        );
        return this.storeService.create({ connection, platform, shop });
    }

    @Get()
    findAll() {
        return this.storeService.findAll();
    }

    @Get('/products/:id')
    async fetchProducts(@Param('id') _id: string) {
        const data = await this.storeService.findOneById<any>(_id);
        const session: any = JSON.parse(data.connection);
        console.log(session, ' <<< session');
        try {
            const Products = await shopify.rest.Product.all({
                session,
            });
            console.log(Products, ' <<< Products');
            return Products;
        } catch (error) {
            console.log(error.message, ' <<< error');
            throw new InternalServerErrorException({
                statusCode: 500,
                message: 'http.serverError.internalServerError',
                _error: error.message,
            });
        }
    }

    @Get('/connected/:shop')
    async storeConnected(@Param('shop') shop: string) {
        const data = await this.storeService.findOneByShop<any>(shop);
        if (!data) {
            throw new NotFoundException({
                statusCode: 404,
                message: 'http.exception.notFound',
                _error: 'Store not found',
            });
        }
        return data;
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //   return this.storeService.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    //   return this.storeService.update(+id, updateStoreDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.storeService.remove(+id);
    // }

    // @Get('shopify')
    // @UseGuards(AuthGuard('shopify'))
    // shopifyAuth(@Req() req: Request, @Res() res: Response) {
    //   console.log("SHOPIFY AUTH >>>>>\n\n\n\n")
    //   const shopName = req.query.shop_name;
    //   if (shopName) {

    //       const shopState = Date.now();
    //       // shopify callback redirect
    //       const redirectURL = process.env.TUNNEL_URL + '/shopify-api/callback';

    //       // Install URL for app install
    //       const shopifyURL = 'https://' + shopName +
    //           '/admin/oauth/authorize?client_id=' + process.env.SHOPIFY_API_KEY +
    //           '&scope=' + process.env.SCOPES +
    //           '&state=' + shopState +
    //           '&redirect_uri=' + redirectURL;

    //       res.cookie('state', shopState);
    //       res.redirect(shopifyURL);
    //   } else {
    //       return res.status(400).send('Missing "Shop Name" parameter!!');
    //   }
    // }

    // @Get('shopify/callback')
    // async shopifyCallback(@Req() req: any) {
    //   const {  profile } = req.user;

    //   const existingStore = await this.storeService.findByShop(profile._json.shop_domain);
    //   if (existingStore) {
    //     // Update the existing store's access token
    //     await existingStore.save();
    //     return existingStore;
    //   } else {
    //     // Create a new store entry
    //     const newStore = { shop: profile._json.shop_domain};
    //     const createdStore = await this.storeService.create(newStore);
    //     return createdStore;
    //   }
    // }
}
