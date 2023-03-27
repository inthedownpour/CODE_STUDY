let [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);