import { Controller, Get, Query } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getOrders(@Query('num') num = 21) {
    return `Order number: ${num}`;
  }
}
