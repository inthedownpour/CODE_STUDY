// stack 문제
// stack은 push, pop만 가능하기 때문에 주의(unshift, shift 사용 불가)
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let lStack = input[0].split('');
let rStack = [];
let len = Number(input[1]) + 1;

for (let i = 2; i <= len; i++) {
    let cmd = input[i].split(' ');
    switch (cmd[0]) {
        //커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
        case 'L':
            if(lStack.length !== 0) {
                rStack.push(lStack.pop());
            }
            break;
        //커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
        case 'D':
            if(rStack.length !== 0) {
                lStack.push(rStack.pop());
            }
            break;
        //	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
        case 'B':
            if (lStack.length !== 0) {
                lStack.pop();
            }
            break;
        //	$라는 문자를 커서 왼쪽에 추가함
        case 'P':
            lStack.push(cmd[1]);
            break;
    }
}

let answer = lStack.join('');
answer += rStack.reverse().join('');
console.log(answer);