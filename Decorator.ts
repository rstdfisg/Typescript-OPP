interface ICoffee {
    getCost(): number;
    getDescription(): string;
}

class SimpleCoffee implements ICoffee {


    constructor() {

    }

    public getCost(): number {
        return 10;
    }

    public getDescription(): string {
        return 'Simple coffee';
    }
}

class MilkCoffee implements ICoffee {

    protected coffee: ICoffee;

    public constructor(coffee: ICoffee) {
        this.coffee = coffee;
    }

    public getCost(): number {
        return this.coffee.getCost() + 2;
    }

    public getDescription(): string {
        return this.coffee.getDescription() + ', milk';
    }
}

class WhipCoffee implements ICoffee {

    protected coffee: ICoffee;

    public constructor(coffee: ICoffee) {
        this.coffee = coffee;
    }

    public getCost(): number {
        return this.coffee.getCost() + 5;
    }

    public getDescription(): string {
        return this.coffee.getDescription() + ', whip';
    }
}

class VanillaCoffee implements ICoffee {

    protected coffee: ICoffee;

    public constructor(coffee: ICoffee) {
        this.coffee = coffee;
    }

    public getCost(): number {
        return this.coffee.getCost() + 3;
    }

    public getDescription(): string {
        return this.coffee.getDescription() + ', vanilla';
    }
}


var someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // Simple Coffee

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // 17
console.log(someCoffee.getDescription()); // Simple Coffee, milk, whip

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription()); // Simple Coffee, milk, whip, vanilla