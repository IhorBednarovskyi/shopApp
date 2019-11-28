import { ProductType } from './product-type.enum';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category?: ProductType,
        public isAvailable?: boolean
    ) {
        this.isAvailable = isAvailable || false;
    }
}
