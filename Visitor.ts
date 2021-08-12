
interface Animal {
    accept(operation: AnimalOperation): void;
}

interface AnimalOperation {
    visitMonkey(monkey: Monkey): void;
    visitLion(lion: Lion): void;
    visitDolphin(dolphin: Dolphin): void;
}

class Monkey implements Animal {

    public shout(): void {
        console.log('Ooh oo aa aa!');
    }

    public accept(operation: AnimalOperation) {
        operation.visitMonkey(this);
    }
}

class Lion implements Animal {
    public roar(): void {
        console.log('Roaaar!');
    }

    public accept(operation: AnimalOperation) {
        operation.visitLion(this);
    }
}

class Dolphin implements Animal {
    public speak(): void {
        console.log('Tuut tuttu tuutt!');
    }

    public accept(operation: AnimalOperation) {
        operation.visitDolphin(this);
    }
}

class Speak implements AnimalOperation {
    public visitMonkey(monkey: Monkey): void {
        monkey.shout();
    }

    public visitLion(lion: Lion): void {
        lion.roar();
    }

    public visitDolphin(dolphin: Dolphin): void {
        dolphin.speak();
    }
}

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

const speak = new Speak();

monkey.accept(speak);    // Ooh oo aa aa!    
lion.accept(speak);      // Roaaar!
dolphin.accept(speak);   // Tuut tutt tuutt!

class Jump implements AnimalOperation {
    public visitMonkey(): void {
        console.log('Jumped 20 feet high! on to the tree!');
    }

    public visitLion(): void {
        console.log('Jumped 7 feet! Back on the ground!');
    }

    public visitDolphin(): void {
        console.log('Walked on water a little and disappeared');
    }
}

const jump = new Jump();

monkey.accept(speak);   // Ooh oo aa aa!
monkey.accept(jump);    // Jumped 20 feet high! on to the tree!

lion.accept(speak);     // Roaaar!
lion.accept(jump);      // Jumped 7 feet! Back on the ground! 

dolphin.accept(speak);  // Tuut tutt tuutt! 
dolphin.accept(jump);   // Walked on water a little and disappeared