import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller({
  version: '1',
  path: '/store',
})
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  // @Get()
  // findAll() {
  //   return this.storeService.findAll();
  // }

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

  @Get('shopify')
  @UseGuards(AuthGuard('shopify'))
  shopifyAuth(@Req() req: Request, @Res() res: Response) {
    console.log("SHOPIFY AUTH >>>>>\n\n\n\n")
    const shopName = req.query.shop_name;
    if (shopName) {

        const shopState = Date.now();
        // shopify callback redirect
        const redirectURL = process.env.TUNNEL_URL + '/shopify-api/callback';

        // Install URL for app install
        const shopifyURL = 'https://' + shopName +
            '/admin/oauth/authorize?client_id=' + process.env.SHOPIFY_API_KEY +
            '&scope=' + process.env.SCOPES +
            '&state=' + shopState +
            '&redirect_uri=' + redirectURL;

        res.cookie('state', shopState);
        res.redirect(shopifyURL);
    } else {
        return res.status(400).send('Missing "Shop Name" parameter!!');
    }
  }

  @Get('shopify/callback')
  async shopifyCallback(@Req() req: any) {
    const { accessToken, profile } = req.user;

    const existingStore = await this.storeService.findByShop(profile._json.shop_domain);
    if (existingStore) {
      // Update the existing store's access token
      existingStore.accessToken = accessToken;
      await existingStore.save();
      return existingStore;
    } else {
      // Create a new store entry
      const newStore = { shop: profile._json.shop_domain, accessToken };
      const createdStore = await this.storeService.create(newStore);
      return createdStore;
    }
  }
}
