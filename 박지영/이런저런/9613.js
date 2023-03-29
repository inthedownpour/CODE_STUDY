let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let t = input.shift();

let answer = [];
for (let i = 0; i < +t; i++) {
    let splited = input[i].split(' ');
    let n = +splited[0];

    let result = 0;
    for (let j = 1; j <= n; j++) {
        for (let k = j + 1; k <= n; k++) {
            var cnt = GCD(+splited[j], +splited[k])
            result += cnt;
        }
    }
    answer.push(result);
}

console.log(answer.join('\n'));

function GCD(a, b) {
    const r = a % b;
    if (r === 0) {
        return b;
    }
    return GCD(b, r);
}