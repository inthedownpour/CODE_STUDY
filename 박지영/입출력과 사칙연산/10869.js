const fs = require('fs');
let input =  fs.readFileSync('/dev/stdin').toString();
input = input.split(' ') //space bar 마다 나눠줌

const intA = +input[0]
const intB = +input[1]

console.log(intA + intB);
console.log(intA - intB);
console.log(intA * intB);
console.log(Math.floor(intA / intB)); //소수점 버림
console.log(intA % intB);