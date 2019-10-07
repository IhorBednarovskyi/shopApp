import { ProductType } from './product-type.enum';


export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: ProductType,
        public isAvailable?: boolean,
        public amount?: number // Если есть amount, то может isAvailable не нужен?
    ) {
        this.isAvailable = isAvailable || false;
        this.amount = amount || 0;
    }
}
