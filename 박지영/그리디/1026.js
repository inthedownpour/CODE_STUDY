let [n, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arrA = a.split(' ').map(Number).sort((a, b) => a - b);
const arrB = b.split(' ').map(Number).sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
    result += arrA[i] * arrB[i];
}

console.log(result);