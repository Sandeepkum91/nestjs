import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customer: Customer[] = [];

  getAllCustomer(): Customer[] {
    return this.customer;
  }
  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: Date.now(),
      ...createCustomerDto,
    };
    this.customer.push(newCustomer);
    return newCustomer;
  }
}
