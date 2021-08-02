interface IWebPage {
    getContent(): string;
}

class About implements IWebPage {
    protected theme: ITheme;

    constructor(theme: ITheme) {
        this.theme = theme
    }
    getContent(): string {
        return "About page in " + this.theme.getColor()
    }
}

class Careers implements IWebPage {
    protected theme: ITheme;

    constructor(theme: ITheme) {
        this.theme = theme
    }
    getContent(): string {
        return "Careers page in " + this.theme.getColor()
    }
}

interface ITheme {
    getColor(): string;
}

class DarkTheme implements ITheme {
    public getColor(): string {
        return 'Dark Black';
    }
}
class LightTheme implements ITheme {
    public getColor(): string {
        return 'Off white';
    }
}
class AquaTheme implements ITheme {
    public getColor(): string {
        return 'Light blue';
    }
}


function examepleOfBridges() {
    const darkTheme = new DarkTheme()

    const about = new About(darkTheme)
    const careers = new Careers(darkTheme)

    console.log(careers.getContent())
    console.log(about.getContent())
}

export { examepleOfBridges }


