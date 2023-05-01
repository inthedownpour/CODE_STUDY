// https://assaeunji.github.io/python/2020-05-04-bj1966/
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [tc, ...inputs] = input;

for (let i = 0; i < tc; i++) {
    let count = 1;
    // 현재 위치 저장
    let m = Number(inputs[i * 2].split(' ')[1])
    let queue = inputs[i * 2 + 1].split(' ').map(Number);

    while (true) {
        const item = queue.shift();
        // 현재 item이 우선순위가 가장 높은 숫자고, m이 맨앞(0)이면 반복문 끝
        if (Math.max(...queue) <= item && m === 0) {
            console.log(count);
            break;
        // 현재 item이 우선순위가 가장 큰 수가 아니고 m이 0이라면 맨 뒤로 보내주고
        // m 또한 맨 마지막으로 위치 재설정
        } else if (Math.max(...queue) > item && m === 0) {
            queue.push(item);
            m = queue.length - 1;
        // 현재 item이 우선순위가 가장 큰 수가 아니면 맨 뒤로 보내준다 m - 1
        } else if (Math.max(...queue) > item) {
            queue.push(item);
            m -= 1;
        // 현재 item이 우선순위가 가장 큰수면 출력을 하기 때문에 카운트를 늘려주고
        // m 또한 -1을 해준다
        } else if (Math.max(...queue) <= item) {
            count += 1;
            m -= 1;
        }
    }
}