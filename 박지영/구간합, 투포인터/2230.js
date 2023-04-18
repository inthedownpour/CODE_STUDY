const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);
let start = 0;
let end = 0;
let answer = Infinity;

while (start <= end && end < n) {
    const diff = Math.abs(arr[start] - arr[end]);

    if (diff < m) {
        end++;
    } else {
        answer = Math.min(answer, diff);
        start++;
    }
    if (diff === m) {
        break;
    }
}

console.log(answer);