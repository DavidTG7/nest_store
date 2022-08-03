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
  // ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
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
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `Product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'create action',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
