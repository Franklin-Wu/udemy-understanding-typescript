class MyMap<T> {
    private dictionary: {[key: string]: T} = {};

    // should create a new key-value pair
    setItem(key: string, item: T): void {
        this.dictionary[key] = item;
    }

    // should retrieve the value of the provided key
    getItem(key: string): T {
        return this.dictionary[key];
    }

    // should remove all key-value pairs
    clear(): void {
        this.dictionary = {};
    }

    // should output key-value pairs
    printMap(): void {
        for (let key in this.dictionary) {
            console.log(key + ': ' + this.dictionary[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'))
console.log(numberMap.getItem('bananas'))
console.log(numberMap.getItem('cherries'))
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
console.log(stringMap.getItem('age'))
console.log(stringMap.getItem('name'))
console.log(stringMap.getItem('occupation'))
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
