class EditorMemento {
    protected content: string;

    public constructor(content: string) {
        this.content = content;
    }

    public getContent() {
        return this.content;
    }
}

class Editor {
    protected content: string = '';
    private undo: Array<EditorMemento> = [];

    public type(words: string) {
        this.undo.push(new EditorMemento(this.content))
        this.content = this.content + ' ' + words;
    }

    public getContent(): string {
        return this.content;
    }

    public Undo(): void {
        if (this.undo.length > 0) {
            this.content = this.undo[this.undo.length - 1].getContent()
            this.undo.pop()
        }
    }

    public save(): EditorMemento {
        return new EditorMemento(this.content);
    }

    public restore(memento: EditorMemento) {
        this.content = memento.getContent();
    }
}


let editor = new Editor();

// Type some stuff
editor.type('This is the first sentence.');
editor.type('This is second.');

// Save the state to restore to : This is the first sentence. This is second.
let saved = editor.save();

// Type some more
editor.type('And this is third.');

// Output: Content before Saving
console.log(editor.getContent());

// Restoring to last saved state
editor.restore(saved);
console.log(editor.getContent());


editor = new Editor();
console.log(editor.getContent());
for (let i = 0; i < 5; i++) {
    editor.type(`${i}`)
    console.log(`type${i} : ` + editor.getContent());
}

for (let i = 0; i < 6; i++) {
    editor.Undo()
    console.log(`Undo : ` + editor.getContent());
}