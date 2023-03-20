const input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input);
const dp = new Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 1;
for (let i = 3; i <= n; i++) {
    // BigInt를 사용하지 않고, Number로 처리하게 되면
    // 최대 정수값(2^53)을 넘기기 때문에 에러 발생
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
// 출력 시 BigInt는 끝에 n이 붙기 때문에 꼭 String으로 처리
console.log(String(dp[n]));