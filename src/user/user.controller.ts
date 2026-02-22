import { Controller, Get } from '@nestjs/common';

@Controller('user') //decorator
export class UserController {
  @Get()
  getUser() {
    return 'user data fetch sucessfullykkkk';
  }
}
