abstract class Builder {

    public build(): void {
        this.test();
        this.lintt();
        this.assemble();
        this.deploy();
    }

    public test(): void { };
    public lintt(): void { };
    public assemble(): void { };
    public deploy(): void { };
}

class AndroidBuilder extends Builder {
    public test(): void {
        console.log('Running android tests')
    };
    public lintt(): void {
        console.log("Linting the android code")
    };
    public assemble(): void {
        console.log('Assembling the android build')
    };
    public deploy(): void {
        console.log('Deploying android build to server')
    };
}

class IosBuilder extends Builder {
    public test() {
        console.log('Running ios tests');
    }

    public lint() {
        console.log('Linting the ios code');
    }

    public assemble() {
        console.log('Assembling the ios build');
    }

    public deploy() {
        console.log('Deploying ios build to server');
    }
}

const androidBuilder = new AndroidBuilder();
androidBuilder.build();


const iosBuilder = new IosBuilder();
iosBuilder.build();
