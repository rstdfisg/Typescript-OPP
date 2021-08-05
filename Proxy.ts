interface IDoor {
    open(): void;
    close(): void;
}



class LabDoor implements IDoor {
    protected doorOpen: boolean;


    public constructor() {
        this.doorOpen = false;
    }
    public open(): void {
        if (this.doorOpen) {
            console.log('The Door has been opened already!');
        } else {
            this.doorOpen = !this.doorOpen;
            console.log('Opening lab door');
        }
    }

    public close(): void {
        if (!this.doorOpen) {
            console.log('The Door has been closed already!');
        } else {
            this.doorOpen = !this.doorOpen;
            console.log('Closing the lab door');
        }
    }
}

class Security {
    protected door: IDoor;

    public constructor(door: IDoor) {
        this.door = door;
    }

    public open(password: string): void {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('No!!!!!')
        }
    }

    private authenticate(password: string): boolean {
        return (password === '!@#1');
    }

    public close(): void {
        this.door.close();
    }

}


const door = new Security(new LabDoor());
door.open('invalid'); // Big no! It ain't possible.
door.open('invalid');

door.open('!@#1'); // Opening lab door
door.open('!@#1');

door.close(); // Closing lab door 
door.close();