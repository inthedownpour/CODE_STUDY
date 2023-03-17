//https://nyang-in.tistory.com/274
const wine = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((v) => Number(v));
const number = wine[0];

const dp = new Array(number + 1);
dp[1] = wine[1];
dp[2] = wine[1] + wine[2];
dp[3] = Math.max(wine[1] + wine[2], wine[2] + wine[3], wine[1] + wine[3]);

for (let n = 4; n <= number; n++) {
  dp[n] = Math.max(
    dp[n - 3] + wine[n - 1] + wine[n],
    dp[n - 2] + wine[n],
    dp[n - 1]
  );
}

console.log(dp[number]);

// 1. N번째 잔을 마셨을 경우
// 1-1. N-1 번째 잔을 마심 => dp[n - 3] + wine[n - 1] + wine[n]
// 1-2. N-1 번째 잔 안 마심 => dp[n - 2] + wine[n]

// 2. N번째 잔을 안 마셨을 경우
// 이경우 무조건 N-1번째 잔을 마심 => dp[n - 1]