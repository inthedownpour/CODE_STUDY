let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    let stack = [];

    if (!checkPossible(input)) {
        return 0;
    }

    for (const str of input) {
        if (str === '(' || str === '[') {
            stack.push(str);
        }
        else if (str === ')' || str === ']') {
            const reverse = str === ')' ? '(' : '[';
            const point = reverse === '(' ? 2 : 3;

            if (stack[stack.length - 1] === reverse) {
                stack.pop();
                stack.push(point);
            } else {
                let temp = 0;
                while (1) {
                    const pop = stack.pop();
                    if (typeof pop === 'number') {
                        temp += pop;
                    } else if (pop === reverse) {
                        stack.push(temp * point);
                        break;
                    }
                }
            }
        }
    }
    return stack.reduce((acc, cur) => acc + cur);
}

function checkPossible(input) {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        let top = stack[stack.length - 1];
        const cur = input[i];

        if (cur === ']' && top === '[') {
            stack.pop();
        } else if (cur === ')' && top === '(') {
            stack.pop();
        } else {
            stack.push(cur);
        }
    }
    return stack.length ? false : true;
}

const answer = solution(input)
console.log(answer);