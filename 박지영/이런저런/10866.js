const [N, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

let deque = [];
let answer = [];

for (let i = 0; i < N; i++) {
    let cmd = input[i].split(' ');
    switch (cmd[0]) {
        //배열의 맨 앞에 값 추가 : unshift()
        case 'push_front':
            deque.unshift(cmd[1]);
            break;
        //배열의 맨 뒤에 값 추가 : push()
        case 'push_back':
            deque.push(cmd[1]);
            break;
        //배열의 맨 앞 값 제거 : shift()
        case 'pop_front':
            answer.push(deque.shift() || -1);
            break;
        //배열의 맨 뒤 값 제거 : pop()
        case 'pop_back':
            answer.push(deque.pop() || -1);
            break;
        case 'size':
            answer.push(deque.length);
            break;
        case 'empty':
            answer.push(deque[0] ? 0 : 1);
            break;
        case 'front':
            answer.push(deque[0] || -1);
            break;
        case 'back':
            answer.push(deque[deque.length - 1] || -1);
            break;
    }
}
console.log(answer.join('\n'));