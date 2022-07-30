import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':customerId')
  getCustomers(@Param('customerId') customerId: string) {
    return `Customers=> ${customerId}`;
  }
}
