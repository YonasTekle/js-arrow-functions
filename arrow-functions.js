/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
const saySamething = message => console.log(message);
saySamething('Hello wolrd');

// Arrow function without parameters
const sayHallo = () => console.log('Hallo!!');
sayHallo();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    <P>`
)

console.log(returnMultipleLines());