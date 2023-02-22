let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let num = input[i].split(' ');
    let sum = Number(num[0]) + Number(num[1]);

    if (num[0] == 0 && num[1] == 0) {
        break;
    }

    console.log(sum);
}