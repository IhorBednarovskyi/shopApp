export class CartProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public amount?: number
    ) {
        this.amount = amount || 1;
    }
}
