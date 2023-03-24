let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const len = input.length - 1;
let answer = [input];

for (let i = 0; i < len; i++) {
    let newStr = input.substring(1);
    answer.push(newStr);
    input = newStr;
}

answer.sort();
console.log(answer.join('\n'));