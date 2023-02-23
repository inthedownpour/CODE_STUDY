let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ');
const V = input[2];

const result = arr.filter(item => item == V)
console.log(result.length)

// let array = [3,5,11,0,9,'string'];
// let result = array.filter((value) => value < 10)
// console.log(result);

// //output : array [3, 5, 0, 9]