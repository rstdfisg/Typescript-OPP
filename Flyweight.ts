
class KarakTea {
    protected flavor: string;

    public constructor(flavor: string) {
        this.flavor = flavor;
    }

    public getFlavor(): string {
        return this.flavor;
    }
};


class TeaMaker {
    protected availableTea: { [key: string]: any };

    constructor() {
        this.availableTea = {};
    }

    public make(preference: string): any {
        if (!this.availableTea.hasOwnProperty(preference)) {
            this.availableTea[preference] = new KarakTea(preference)
        }
        return this.availableTea[preference]
    }
}

class TeaShop {
    protected orders: { [key: string]: any };
    protected teaMaker: any;

    public constructor(teaMaker: TeaMaker) {
        this.teaMaker = teaMaker;
        this.orders = {};
    }

    public takeOrder(teaType: string, table: number): void {
        this.orders[table] = this.teaMaker.make(teaType)
    }

    public serve(): void {
        for (let _table in this.orders) {
            let _tea = this.orders[_table];
            console.log(`Serve the tea to table ${_table} and tea flavor is ${_tea.getFlavor()}`)

        }
    }
}

let teaMaker = new TeaMaker();
let shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('less sugar', 3);
shop.takeOrder('without sugar', 5);

shop.serve();

// Serve the tea to table 1 and tea flavor is less sugar
// Serve the tea to table 2 and tea flavor is more milk
// Serve the tea to table 3 and tea flavor is less sugar
// Serve the tea to table 5 and tea flavor is without sugar

