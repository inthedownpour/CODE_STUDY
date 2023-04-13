//스택
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = [];

for (let i = 0; i < input.length; i++) {
    const stack = [];
    let str = input[i];
    let isCompare = true;
    if (str == '.') break;
    for (let j = 0; j < str.length; j++) {
        if (str[j] == '(' || str[j] == '[') {
            stack.push(str[j]);
        }
        else if (str[j] === ')') {
            if (stack[stack.length - 1] == "(") {
                stack.pop();
            } else {
                isCompare = false;
                break;
            }
        }
        else if (str[j] === ']') {
            if (stack[stack.length - 1] == "[") {
                stack.pop();
            } else {
                isCompare = false;
                break;
            }

        }
        else if (str[j] == '.') break;
    }
    if (stack.length > 0 || !isCompare) answer.push("no");
    else answer.push("yes");
}
console.log(answer.join('\n'));