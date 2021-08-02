interface Lion {
    roar(): void;
}

class AfricanLion implements Lion {
    public roar(): void {
        console.log('AfricanLion')
    }
}

class AsianLion implements Lion {
    public roar(): void {
        console.log('AsianLion')
    }
}

class Hunter {
    public hunt(lion: Lion): void {
        lion.roar()
    }
}

// This needs to be added to the game
class WildDog {
    public bark(): void {
        console.log('wang wang!!')
    }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion {
    protected dog: WildDog;

    public constructor(dog: WildDog) {
        this.dog = dog;
    }

    public roar() {
        this.dog.bark();
    }
}

let wildDog = new WildDog()
let wildDogAdapter = new WildDogAdapter(wildDog)

let hunter = new Hunter()

let africanLion = new AfricanLion()
let asianLion = new AsianLion()

hunter.hunt(wildDogAdapter)
hunter.hunt(africanLion)
hunter.hunt(asianLion)
