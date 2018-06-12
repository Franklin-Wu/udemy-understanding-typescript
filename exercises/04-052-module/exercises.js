// Exercise 1
// expected: 20
// const, arrow functions
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2
// expected: Hello, Max
// expected: Hello, Anna
// const, default parameters, arrow functions
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3
// expected: -3
// const, spread operator
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4
// expected: [55, 20, -3, 33, 38, 5]
// const, spread operator
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5
// expected: 3.89 2.99 1.38
// const, array destructuring
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6
// expected: Will 12
// const, object destructuring
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
