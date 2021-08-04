class Computer {

    public getElectricShock(): void {
        console.log("Ouch!");
    }

    public makeSound(): void {
        console.log("Beep beep!");
    }

    public showLoadingScreen(): void {
        console.log("Loading..");
    }

    public bam(): void {
        console.log("Ready to be used!");
    }

    public closeEverything(): void {
        console.log("Bup bup bup buzzzz!");
    }

    public sooth(): void {
        console.log("Zzzzz");
    }

    public pullCurrent(): void {
        console.log("Haaah!");
    }
}

class ComputerFacade {
    protected computer: Computer;

    public constructor(computer: Computer) {
        this.computer = computer;
    }

    public turnOn() {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    public turnOff() {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz