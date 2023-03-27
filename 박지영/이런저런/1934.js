let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let t = +input[0];

function GCD(a, b) {
    let r = a % b;
    if(r === 0) return b;
    return GCD(b, r);
}

for (let i = 1; i <= t; i++) {
    let [a, b] = input[i].split(' ').map(Number);

    let lcm = a * b / GCD(a, b);
    console.log(lcm)
}