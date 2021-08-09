class Bulb {
    public turnOn(): void {
        console.log("Bulb has been lit");
    }

    public turnOff(): void {
        console.log("Darkness!");
    }
}

interface ICommand {
    execute(): void;
    undo(): void;
    redo(): void;
}

class TurnOn implements ICommand {
    protected bulb: Bulb;

    public constructor(bulb: Bulb) {
        this.bulb = bulb;
    }

    public execute(): void {
        this.bulb.turnOn();
    }

    public undo(): void {
        this.bulb.turnOff();
    }

    public redo(): void {
        this.execute();
    }
}

class TurnOff implements ICommand {
    protected bulb: Bulb;

    public constructor(bulb: Bulb) {
        this.bulb = bulb;
    }

    public execute() {
        this.bulb.turnOff();
    }

    public undo() {
        this.bulb.turnOn();
    }

    public redo() {
        this.execute();
    }
}

// Invoker
class RemoteControl {
    public submit(command: ICommand) {
        command.execute();
    }
}

const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // Bulb has been lit!
remote.submit(turnOff); // Darkness!

