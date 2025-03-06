// Summing the Digits of a Number with While Loop

// let number = 4671392


let number = 4671392;
let sum = 0;

while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log(`The sum of the digits is: ${sum}`);
