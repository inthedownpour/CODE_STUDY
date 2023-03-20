const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
    let num = input[i].split(' ');
    console.log(+num[0] + +num[1]);
}
