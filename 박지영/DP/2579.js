//https://nyang-in.tistory.com/271
let stairs = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((e) => Number(e));
const N = stairs[0];
const dp = Array.from(new Array(N + 1));

dp[1] = stairs[1];
dp[2] = dp[1] + stairs[2];
dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3];

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairs[i - 1] + stairs[i],
    dp[i - 2] + stairs[i]
  );
}

console.log(dp[N]);

// 1. 마지막 칸의 전칸
// 마지막 칸이 10이라 하면
// ? => 9 => 10
// 7이 가능
// (i-3) + (i-1) + i

// 2. 마지막 칸의 전전칸
// 마지막 칸이 10이라 하면
// ? => 8 => 10
// 붙어있거나, 안붙어있거나 둘 다 가능
// 제한이 없음
// (i - 2) + i