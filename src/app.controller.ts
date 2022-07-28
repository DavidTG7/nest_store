import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "HelloDavid";
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
  getProducts(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `Product ${productId} and ${id}`;
  }
}
