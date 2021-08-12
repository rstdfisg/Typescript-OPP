abstract class Account {
    protected successor: Account | null;
    protected balance: number;

    public constructor() {
        this.successor = null;
        this.balance = 0;
    }

    public setNext(account: Account): void {
        this.successor = account
    }

    public Pay(amountToPay: number) {
        if (this.canPay(amountToPay)) {
            console.log(`Paid by ${this.constructor.name}`)
        } else if (this.successor) {
            console.log(`Cannot Pay by '${this.constructor.name}', proceeding '${this.successor.constructor.name}'`)
            this.successor.Pay(amountToPay)
        } else {
            throw new Error('None of the accounts have enough balance.')
        }
    }

    public canPay(amount: number): boolean {
        return (this.balance >= amount)
    }
}


class Bank extends Account {
    // protected balance: number; // seems no need to declare...

    constructor(balance: number) {
        super();
        this.balance = balance;
    }
}

class Paypal extends Account {
    // protected balance: number;

    constructor(balance: number) {
        super();
        this.balance = balance;
    }
}
class Bitcoin extends Account {
    // protected balance: number;

    constructor(balance: number) {
        super();
        this.balance = balance;
    }
}

console.clear()
const bank = new Bank(100);
const paypal = new Paypal(200);      // Paypal with balance 200
const bitcoin = new Bitcoin(300);    // Bitcoin with balance 300


bank.setNext(paypal); // set chain
paypal.setNext(bitcoin);


bank.Pay(259);
// Cannot Pay by 'Bank', proceeding 'Paypal'
// Cannot Pay by 'Paypal', proceeding 'Bitcoin'
// Paid by Bitcoin