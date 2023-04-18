const [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);
let start = 0;
let end = 0;
let answer = Infinity;

// 이중 for문 시간초과
while (start <= end && end < n) {
    const diff = Math.abs(arr[start] - arr[end]);

    if (diff < m) {
        end++;
    } else {
        answer = Math.min(answer, diff);
        start++;
    }
    // m과 같다면 더 이상 작은 차이는 없으니 종료
    if (diff === m) {
        break;
    }
}

console.log(answer);