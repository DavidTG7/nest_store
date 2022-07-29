import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'HelloDavid';
  }

  @Get('new')
  newEndpoint() {
    return 'I am new';
  }

  @Get('/route/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products limit=> ${limit} offset=>${offset} brand=> ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `Product ${productId} and ${id}`;
  }
}
