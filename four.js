 
// 4. Generating Fibonacci Sequence up to N Terms with While Loop


// let a = 0
// let b = 1
// let i = 1

// let Sequence = [a, b]


// while (Sequence.length  < 20) {


// let nextNumber = a + b

//     Sequence.push(nextNumber)
//     a = b
//     b = nextNumber;
//     i++
// }


// console.log (Sequence)
// console.log (`next fibonacci next number is ${nextNumber}`)



let a = 0;
let b = 1;
let i = 1;

let sequence = [a, b];

while (sequence.length < 20) {
    let nextNumber = a + b; 
    sequence.push(nextNumber);
    a = b;
    b = nextNumber;
    i++;
}

console.log(`Fibonacci Sequence: ${sequence}`);
console.log(`Next Fibonacci number is ${a + b}`);
