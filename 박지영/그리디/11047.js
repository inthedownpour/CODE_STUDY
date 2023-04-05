let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = input.shift().split(' ').map(Number);

let sorted = input.sort((a, b) => b - a);
let cnt = 0;

for (let item of sorted) {
    cnt = cnt + Math.floor(k / item); // 동전의 갯수
    k = k - item * Math.floor(k / item); // 남은 돈 계산
}

console.log(cnt);