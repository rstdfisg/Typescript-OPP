class Sheep {
    protected name: string;
    protected category: string;

    public constructor(name: string, category: string = 'Mountain Sheep') {
        this.name = name;
        this.category = category;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public getCategory(): string {
        return this.category;
    }
}


const original = new Sheep('Jolly');
original.setName('solly')
console.log(original.getName()); // Jolly
console.log(original.getCategory()); // Mountain Sheep

// Clone and modify what is required

// clone instance in js const copy = Object.assign(Object.create(Object.getPrototypeOf(ori)), orig);


const cloned = Object.assign(Object.create(Object.getPrototypeOf(original)), original); //deep ?
//{ ...original } as Sheep; // shallow copy


cloned.setName('Dolly');

console.log(cloned.getName()); // Dolly
console.log(cloned.getCategory()); // Mountain sheep