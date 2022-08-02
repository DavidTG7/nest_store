import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `Products limit=> ${limit} offset=>${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductsFilter() {
    return {
      message: 'I am a filer!',
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    // return {
    //   message: `Product ${productId}`,
    // };
    console.log('product id', productId, typeof productId);
    return this.productsService.findOne(Number(productId));
  }

  @Post()
  create(@Body() payload: object) {
    // return {
    //   message: 'create action',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(Number(id), payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
