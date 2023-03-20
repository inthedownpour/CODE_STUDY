let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

//비구조화 할당
let max = Math.max(...input);

for (let i = 0; i < input.length; i++) {
    if (input[i] == max) {
        console.log(max+'\n'+(i+1));
    }
}