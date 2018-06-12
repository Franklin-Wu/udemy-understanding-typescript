// Exercise 1
// expected: 20
// const, arrow functions
const double: (arg1: number) => number = (value: number) => value * 2;
console.log(double(10));

// Exercise 2
// expected: Hello, Max
// expected: Hello, Anna
// const, default parameters, arrow functions
const greet: (arg1?: string) => void = function (name: string = 'Max') {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3
// expected: -3
// const, spread operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
// expected: [55, 20, -3, 33, 38, 5]
// const, spread operator
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
// expected: 3.89 2.99 1.38
// const, array destructuring
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
// expected: Will 12
// const, object destructuring
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
