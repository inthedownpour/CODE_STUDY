let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let line = input[0].split(' ');
let N = +line[0];
let M = +line[1];

let I, J = 0;
const result = [];
for (let i = 0; i < N; i++) {
    result[i] = i + 1;
}

for (let i = 1; i <= M; i++) {
    const arr = input[i].split(' ');
    I = arr[0];
    J = arr[1];

    for (let j = J; j >= I; j--) {
        let temp = result[j];
        result[j] = result[j - 1];
        result[j - 1] = temp;
    }
}
result.forEach((i) => process.stdout.write(i + ' '))