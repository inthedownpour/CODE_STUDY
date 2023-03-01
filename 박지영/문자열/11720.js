let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input[0];
let nums = input[1].split('');
let result = 0;

nums.forEach(e => {
    result += Number(e);
});

console.log(result);