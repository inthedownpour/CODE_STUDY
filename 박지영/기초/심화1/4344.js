let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const inputC = +input[0];

for (let i = 1; i <= inputC; i++) {
    let cases = input[i].split(' ');
    let scoreCase = +cases[0];
    let sum = 0;

    for (let j = 1; j <= scoreCase; j++) {
        sum += +cases[j]
    }
    let avg = sum / scoreCase;

    let count = 0;
    for (let j = 1; j <= scoreCase; j++) {
        if (cases[j] > avg) {
            count++;
        }
    }
    console.log((count / scoreCase * 100).toFixed(3)+'%');
}