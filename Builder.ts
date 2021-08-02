class Burger {
    protected size: number;

    protected cheese: boolean;
    protected pepperoni: boolean;
    protected lettuce: boolean;
    protected tomato: boolean;

    public constructor(builder: BurgerBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.lettuce = builder.lettuce;
        this.tomato = builder.tomato;
    }

}

class BurgerBuilder {
    public size: number;

    public cheese: boolean;
    public pepperoni: boolean;
    public lettuce: boolean;
    public tomato: boolean;

    public constructor(size: number) {
        this.size = size;
        this.pepperoni = false;
        this.lettuce = false;
        this.cheese = false;
        this.tomato = false;
    }
    public addPepperoni(): any {
        this.pepperoni = true;
        return this
    }

    public addLettuce(): any {
        this.lettuce = true;
        return this
    }

    public addCheese(): any {
        this.cheese = true;
        return this
    }

    public addTomato(): any {
        this.tomato = true;
        return this
    }

    public build(): Burger {
        return new Burger(this);
    }
}

let burger = new BurgerBuilder(14)
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build();

console.log(burger)