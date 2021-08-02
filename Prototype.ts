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

export const deepCopy = <T>(target: T): T => {
    if (target === null) {
        return target;
    }
    if (target instanceof Date) {
        return new Date(target.getTime()) as any;
    }
    if (target instanceof Array) {
        const cp = [] as any[];
        (target as any[]).forEach((v) => { cp.push(v); });
        return cp.map((n: any) => deepCopy<any>(n)) as any;
    }
    if (typeof target === 'object' && target !== {}) {
        const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
        Object.keys(cp).forEach(k => {
            cp[k] = deepCopy<any>(cp[k]);
        });
        return cp as T;
    }
    return target;
};

const original = new Sheep('Jolly');
original.setName('solly')
console.log(original.getName()); // Jolly
console.log(original.getCategory()); // Mountain Sheep

// Clone and modify what is required

// clone instance in js const copy = Object.assign(Object.create(Object.getPrototypeOf(ori)), orig);
const cloned = Object.assign({}, original) as Sheep;
//{ ...original } as Sheep;
//Object.assign(Object.create(Object.getPrototypeOf(original)), original);

cloned.setName('Dolly');

console.log(cloned.getName()); // Dolly
console.log(cloned.getCategory()); // Mountain sheep