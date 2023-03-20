const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

for (let i = 1; i < 10; i++) {
    let sum = +input * i;
    console.log('%d * %d = %d', +input, i, sum)
}