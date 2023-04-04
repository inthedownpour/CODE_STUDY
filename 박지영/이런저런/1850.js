// https://wonit.tistory.com/413
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

gcd = (a, b) => {
    if (b === 0n) return a;
    return gcd(b, a % b);
}

// let answer = '';

// while (cnt--) {
//     answer += 1;
// }

console.log("1".repeat(Number(gcd(a, b))));