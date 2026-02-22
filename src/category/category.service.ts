import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategory(){
        return ['Electronics', 'Fashion', 'Home Appliances'];
    }
}
