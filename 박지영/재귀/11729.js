// https://nyang-in.tistory.com/210
let input = require('fs').readFileSync('/dev/stdin').toString();

let n = +input;
let answer = [];
let count = 0;

// n-1개의 원판을 기둥 시작에서 나머지 기둥에 옮긴다.
// n번 원판을 기둥 시작에서 끝으로 옮긴다.
// n-1개의 원판을 나머지 기둥에서 끝으로 옮긴다.

function hanoi(start, other, end, n) {
    if (n === 0) return;
    hanoi(start, end, other, n - 1);
    answer.push([start, end]);
    count++;
    hanoi(other, start, end, n - 1);
}

// 시작, 나머지기둥, 끝, 원판갯수
hanoi(1, 2, 3, n);
console.log(count + '\n' + answer.map(e => e.join(' ')).join('\n'));