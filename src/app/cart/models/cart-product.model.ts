export class CartProduct {
    constructor(
        private name: string,
        private price: number,
        private amount?: number
    ) {
        this.amount = amount || 1;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getAmount(): number {
        return this.amount;
    }

    changeAmount(count: number) {
        this.amount += count;
    }

    getTotalPrice() {
        return this.amount * this.price;
    }
}
