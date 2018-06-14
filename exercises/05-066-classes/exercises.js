var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1
// expected: Toooooooooot!
// expected: 0
// expected: 10
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
// expected: 10
var Shape = /** @class */ (function () {
    function Shape(width, length) {
        this.width = width;
        this.length = length;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
// Exercise 3, Solution 1
// expected: 
// expected: 
// expected: Maximilian
var Person1 = /** @class */ (function () {
    function Person1(firstName) {
        if (firstName === void 0) { firstName = ''; }
        this.firstName = firstName;
        if (this.firstName.length <= 3) {
            this.firstName = '';
        }
    }
    return Person1;
}());
console.log(new Person1().firstName);
console.log(new Person1('Ma').firstName);
console.log(new Person1('Maximilian').firstName);
// Exercise 3, Solution 2
// expected: 
// expected: 
// expected: Maximilian
var Person2 = /** @class */ (function () {
    function Person2() {
        this._firstName = '';
    }
    Object.defineProperty(Person2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            if (firstName.length > 3) {
                this._firstName = firstName;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
var person = new Person2();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
