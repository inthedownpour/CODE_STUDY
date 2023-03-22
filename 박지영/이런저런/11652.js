//https://velog.io/@ppmyor/%EB%B0%B1%EC%A4%80BOJ-11652-%EC%B9%B4%EB%93%9C-node.js-javascript
//JS의 최대 값은 2^53 - 1이다.
//수가 2의 62제곱까지 주어질 수 있으므로 모든 수를 BigInt로 변환해야 한다.
const [N, ...card] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map((e) => BigInt(e));
//입력 값을 오름차순으로 정렬
//numbers.sort((a, b) => a - b); 기존방식은 BigInr라 동작 x

// function compare(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }
//   a가 b보다 작은 경우 낮은 색인으로 정렬
//   a가 b와 같은 경우 서로에 대해 변경하지 않음
//   a가 b보다 큰 경우 b를 a보다 낮은 색인으로 정렬
card.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let count = 1;
let maxValue = card[0];
let maxCount = 0;

//투포인터
card.forEach((v, i) => {
    next = card[i+1];
    if (v === next) {
        count++;
    }else {
       count = 1;
    }

    if (count > maxCount) {
        maxCount = count;
        maxValue = v;
    }
});

console.log(String(maxValue));