let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    let stack = [];

    // 올바르지 않은 괄호열인지 확인
    if (!checkPossible(input)) {
        return 0;
    }

    for (const str of input) {
        // '(', '['를 만나면 스택에 넣는다
        if (str === '(' || str === '[') {
            stack.push(str);
        }
        // ')', ']'를 만나면
        else if (str === ')' || str === ']') {
            const reverse = str === ')' ? '(' : '[';
            const point = reverse === '(' ? 2 : 3;

            // 닫는 괄호일 시, 이전 괄호가 한쌍에 맞는 여는 괄호라면
            if (stack[stack.length - 1] === reverse) {
                // top을 pop 한 후
                stack.pop();
                // 2 또는 3을 push
                stack.push(point);
            } else {
                let temp = 0;
                while (1) {
                    const pop = stack.pop();
                    // 스택의 top이 정수일 경우에는 서로 다른 괄호이기 때문에 더하면 된다.
                    // 만약 스택의 top이 숫자면 '('또는 '['를 만날 때까지 나오는 숫자들을 전부 더한다
                    if (typeof pop === 'number') {
                        temp += pop;
                    //그렇지 않은 경우는, 한쌍을 이루기 때문에 곱한 후, 다시 스택에 push 해주면 된다.
                    // '(' 또는 '['를 만나면 더한 숫자 * point(2 or 3)을 곱하고 스택에 넣는다
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

const answer = solution(input);
console.log(answer);