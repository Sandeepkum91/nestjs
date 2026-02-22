import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products=[

        {id: 1, name:'Laptop', price:90000},
        {id:2, name :'Mobile', price:10000},
        {
            id:3, name:'Car', price:1000000
        }
    ]

    getAllProducts(){
        return this.products;

    }

    getProductById(id:number){
        return this.products.find(product=>product.id===id);

    }

}
