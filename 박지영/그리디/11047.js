let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = input.shift().split(' ').map(Number);

// 동전의 금액에 대해 내림차순으로 정렬
let arr = input.sort((a, b) => b - a);
let cnt = 0;

for (let item of arr) {
    // 동전 수 = 목표 금액 / 현재 동전 가치
    cnt = cnt + Math.floor(k / item);
    // 남은 돈 계산
    k = k - item * Math.floor(k / item);
}

console.log(cnt);

// for (let i = 0; i < arr.length; i++) {
//     if (k < arr[i]) {
//         continue;
//     } else {
//         cnt += Math.floor(k / arr[i]);
//         k -= arr[i] * Math.floor(k / arr[i]);
//     }
// }

// console.log(cnt);