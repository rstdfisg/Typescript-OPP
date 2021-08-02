interface IDoor {
    getDescription(): void;
}

class WoodenDoor implements IDoor {
    public getDescription(): void {
        console.log('I am a wooden door');
    }
}

class IronDoor implements IDoor {
    public getDescription(): void {
        console.log('I am an iron door');
    }
}



interface IDoorFittingExpert {
    getDescription(): void;
}

class Welder implements IDoorFittingExpert {
    public getDescription(): void {
        console.log('I can only fit iron doors');
    }
}

class Carpenter implements IDoorFittingExpert {
    public getDescription(): void {
        console.log('I can only fit wooden doors');
    }
}


interface IDoorFactory {
    makeDoor(): IDoor;
    makeFittingExpert(): IDoorFittingExpert;
}



class WoodenDoorFactory implements IDoorFactory {
    public makeDoor(): IDoor {
        return new WoodenDoor();
    }

    public makeFittingExpert(): IDoorFittingExpert {
        return new Carpenter();
    }
}

class IronDoorFactory implements IDoorFactory {
    public makeDoor(): IDoor {
        return new IronDoor();
    }

    public makeFittingExpert(): IDoorFittingExpert {
        return new Welder();
    }
}


const woodenFactory = new WoodenDoorFactory()

let door = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();

door.getDescription();  // Output: I am a wooden door
expert.getDescription(); // Output: I can only fit wooden doors

const ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();
