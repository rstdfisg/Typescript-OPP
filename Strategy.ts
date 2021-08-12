interface SortStrategy {
    sort<T>(dataset: Array<T>): Array<T>;
}

class BubbleSortStrategy implements SortStrategy {
    public sort<T>(dataset: Array<T>): Array<T> {
        console.log("Sorting using bubble sort");

        // Do sorting
        return dataset;
    }
}

class QuickSortStrategy implements SortStrategy {
    public sort<T>(dataset: Array<T>): Array<T> {
        console.log("Sorting using quick sort");

        // Do sorting
        return dataset;
    }
}

class Sorter {
    protected sorter: SortStrategy;

    public constructor(sorter: SortStrategy) {
        this.sorter = sorter;
    }

    public sort<T>(dataset: Array<T>): Array<T> {
        return this.sorter.sort(dataset);
    }
}


let dataset: Array<number | string> = [1, 2, 3, 4, 5, '6'];

console.log(dataset)
const BubbleSort = new BubbleSortStrategy()
const QuickSort = new BubbleSortStrategy()

let sorter = new Sorter(BubbleSort);
sorter.sort(dataset); // Output : Sorting using bubble sort

sorter = new Sorter(QuickSort);
sorter.sort<number | string>(dataset); // Output : Sorting using quick sort