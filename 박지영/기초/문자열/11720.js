let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let nums = input[1].split('');
let result = 0;

nums.forEach(e => {
    result += Number(e);
});

console.log(result);

// console.log((require('fs').readFileSync('/dev/stdin')+'').split('\n')[1]
// .split('').reduce(function(a,b){return +a+(+b)}))