let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
    let arr = input[i].split(' ');

    arr.sort((a, b) => {
        return b - a;
    })

    console.log(arr[2]);
}