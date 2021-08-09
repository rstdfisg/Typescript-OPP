class RadioStation {
    protected frequency: number;

    public constructor(frequency: number) {
        this.frequency = frequency;
    }

    public getFrequency(): number {
        return this.frequency;
    }
}


class StationList implements IterableIterator<RadioStation> {
    // protected stations: { [key: string]: any };
    protected stations: Array<RadioStation>;
    protected pointer: number;

    public constructor() {
        this.stations = [];
        this.pointer = 0;
    }

    public addStation(station: RadioStation): void {
        this.stations.push(station);
    }

    public removeStation(toRemove: RadioStation): void {
        let toRemoveFrequency = toRemove.getFrequency();
        this.stations = this.stations.filter(sf => {
            return sf.getFrequency() !== toRemoveFrequency
        })
    }

    public total(): number {
        // counting the numbers of stations
        return this.stations.length;
    }

    public next(): IteratorResult<RadioStation> {
        if (this.pointer < this.stations.length) {
            return {
                done: false,
                value: this.stations[this.pointer++]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<RadioStation> {
        this.pointer = 0; // Reset
        return this;
    }
}


const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

for (let ss of stationList) {
    console.log(ss.getFrequency());
}

stationList.removeStation(new RadioStation(101));

console.log('after remove');

for (let ss of stationList) {
    console.log(ss.getFrequency());
}

