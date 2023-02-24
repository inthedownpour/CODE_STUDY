let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input[0];
let arr = input[1].split(' ');
let max = Math.max(...arr)
let sum = 0;

for (let i = 0; i < N; i++) {
    sum += arr[i] / max * 100;
}
console.log(sum/N);