let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let line = input[0].split(' ');
let N = +line[0];
let M = +line[1];

let I, J, K = 0;
const result = Array.from({ length: N }, () => 0);

for (let i = 1; i <= M; i++) {
    const arr = input[i].split(' ');
    I = arr[0];
    J = arr[1];
    K = arr[2];

    for (let i = I; i <= J; i++) {
        result[i - 1] = K;
    }
}
result.forEach((i)=>process.stdout.write(i+' '))