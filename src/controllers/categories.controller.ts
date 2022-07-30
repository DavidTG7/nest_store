import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `Category ${productId} and ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create category.',
      payload,
    };
  }
}
