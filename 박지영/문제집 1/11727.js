const input = require('fs').readFileSync('/dev/stdin').toString();
const num = Number(input);
const DP = new Array(num + 1).fill(0);

DP[1] = 1;
DP[2] = 3;
// 2x2 사각형은 1x2가 2개거나 2x1이 두개다
// 따라서 2개를 미리 놨을 때의 경우가 1번 더 추가된다.
for (let i = 3; i <= num; i++) {
    DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
}

console.log(DP[num]);