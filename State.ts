interface IWritingState {
    write(word: string): void;
}

class UpperCase implements IWritingState {

    write(word: string): void {
        console.log(word.toUpperCase())
    }
}

class LowerCase implements IWritingState {

    write(word: string): void {
        console.log(word.toLowerCase())
    }
}

class Default implements IWritingState {

    write(word: string): void {
        console.log(word)
    }
}

class TextEditor {
    protected state: IWritingState;

    public constructor(state: IWritingState) {
        this.state = state;
    }

    public setState(state: IWritingState): void {
        this.state = state;
    }

    public type(words: string): void {
        this.state.write(words);
    }
}


let texteditor = new TextEditor(new Default());

texteditor.type('First line');
texteditor.setState(new UpperCase());

texteditor.type('Second line');
texteditor.type('Third line');

texteditor.setState(new LowerCase());

texteditor.type('Fourth line');

