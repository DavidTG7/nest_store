import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products limit=> ${limit} offset=>${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductsFilter() {
    return {
      message: 'I am a filer!',
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `Product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create action',
      payload,
    };
  }
}
