
interface IEmployee {
    getName(): string;
    setSalary(salary: number): void;
    getSalary(): number;
    getRoles(): [];
}

class Developer implements IEmployee {
    protected name: string;
    protected salary: number;
    protected roles: [];

    public constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.roles = [];
    }

    public getName(): string {
        return this.name
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getRoles(): [] {
        return this.roles;
    }
}

class Designer implements IEmployee {

    protected name: string;
    protected salary: number;
    protected roles: [];

    public constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.roles = [];
    }

    public getName(): string {
        return this.name
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getRoles(): [] {
        return this.roles;
    }
}

class Organization {

    // protected employees: Array<IEmployee>; // tihs is ssmae as IEmployee[]. Represent a list of this type object.
    protected employees: IEmployee[];

    constructor() {
        this.employees = [];
    }

    public addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }

    public getNetSalaries(): number {
        let netSalary: number = 0;

        this.employees.forEach(element => {
            netSalary += element.getSalary();
        });
        return netSalary;
    }
}


// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net salaries: " + organization.getNetSalaries()); // Net Salaries: 22000