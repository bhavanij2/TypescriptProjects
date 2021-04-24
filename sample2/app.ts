import { calculateCircumference } from './math/circle.js';
import { calculateArea } from './math/rectangle.js';

console.log(calculateCircumference(10));
console.log(calculateArea(5, 2));


interface NamedPerson {
    firstName: string;
}

function greet(person: NamedPerson) {
    console.log(`Hello ${person.firstName}`);
}

const person = { firstName: "Bhavani", age: 22 };
greet(person);


// type TwoNumberedFn = (num1: number, num2: number) => number;
interface TwoNumberedFn {
    (num1: number, num2: number): number;
}

function calc(fn: TwoNumberedFn) {
    fn(1,2);
}

calc((x,y) => x + y);