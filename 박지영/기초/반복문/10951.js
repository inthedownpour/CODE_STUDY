let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let num = input[i].split(' ');
    let sum = Number(num[0]) + Number(num[1]);

    console.log(sum);
}