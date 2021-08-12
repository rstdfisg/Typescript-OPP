// Mediator

interface ChatRoomMediator {
    showMessage(user: User, message: string): void
}


class User {
    protected name: string;
    protected chatMediator: ChatRoomMediator;

    constructor(name: string, chatMediator: ChatRoomMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    public getName(): string {
        return this.name
    }

    public send(message: string) {
        this.chatMediator.showMessage(this, message);
    }

}

class ChatRoom implements ChatRoomMediator {

    public showMessage(user: User, message: string): void {
        let time = new Date();
        let sender = user.getName();

        console.log(`${time.toLocaleString()}, [${sender}] : ${message}`);
    }
}

const mediator = new ChatRoom();

let AA = new User('AA', mediator);
let BB = new User('BB', mediator);

AA.send('Hi there!');
BB.send('Hey!');