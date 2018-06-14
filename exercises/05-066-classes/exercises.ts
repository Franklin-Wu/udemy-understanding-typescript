// Exercise 1
// expected: Toooooooooot!
// expected: 0
// expected: 10
class Car {
    private name: string;
    acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    honk(): void {
        console.log("Toooooooooot!");
    }
    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
// expected: 10
abstract class Shape {
    protected width: number;
    protected length: number;
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
    abstract calcSize(): number;
}
class Rectangle extends Shape {
    constructor(width: number, length: number) {
        super(width, length);
    }
    calcSize(): number {
        return this.width * this.length;
    }
}
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3, Solution 1
// expected: 
// expected: 
// expected: Maximilian
class Person1 {
    constructor(readonly firstName: string = '') {
        if (this.firstName.length <= 3) {
            this.firstName = '';
        }
    }
}
console.log(new Person1().firstName);
console.log(new Person1('Ma').firstName);
console.log(new Person1('Maximilian').firstName);

// Exercise 3, Solution 2
// expected: 
// expected: 
// expected: Maximilian
class Person2 {
    private _firstName: string = '';
    get firstName(): string {
        return this._firstName;
    }
    set firstName(firstName: string) {
        if (firstName.length > 3) {
            this._firstName = firstName;
        }
    }
}
const person = new Person2();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
