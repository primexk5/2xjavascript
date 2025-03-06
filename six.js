// Finding the Largest Digit in a Number Using While Loop


let number = 4671392
let largestNumber = 0

while (number > 0){
    let currentNumber = number % 10;
    if(currentNumber > largestNumber){
        largestNumber = currentNumber
    };

    number = Math.floor(number / 10)
}

console.log(`the largest number is ${largestNumber}`)


