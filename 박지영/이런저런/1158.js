let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let [n, k] = input.split(' ').map(Number);

const queue = Array.from({ length: n }, (v, i) => i + 1);
let result = [];

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
        if (j === k) {
            result.push(queue.shift());
        } else {
            queue.push(queue.shift());
        }
    }
}

console.log('<' + result.join(', ') + '>');