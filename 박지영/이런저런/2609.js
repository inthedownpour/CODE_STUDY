// 유클리드 호제법
let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

//최대공약수
function GCD(a, b) {
    const r = a % b;
    if (r === 0) {
        return b;
    }
    return GCD(b, r);
}

//최소공배수
let lcm = a * b / GCD(a, b);
let gcd = GCD(a, b);
console.log(`${gcd}\n${lcm}`);