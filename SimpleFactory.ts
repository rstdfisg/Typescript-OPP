interface IDoor {
    getWidth(): number;
    getHeight(): number;
}

class WoodDoor implements IDoor {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width
    }

    public getHeight(): number {
        return this.height;
    }
}

class DoorFactory {

    static makeDoor(width: number, height: number) {
        return new WoodDoor(width, height)
    }

}


let a = new WoodDoor(1, 2)

console.log(a.getWidth())

let door = DoorFactory.makeDoor(1, 2)

console.log(door.getHeight())

export { DoorFactory }