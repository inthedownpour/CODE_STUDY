const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const arr = [...a, ...b];
arr.sort((a, b) => a - b);

console.log(arr.join(' '));