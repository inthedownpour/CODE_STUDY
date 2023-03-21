let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((e) => Number(e));
const T = inputs[0];
const dp = [];

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for (let i = 1; i <= T; i++) {
    let N = inputs[i];

    for (let j = 6; j <= N; j++) {
        dp[j] = dp[j - 2] + dp[j - 3];
    }
    console.log(dp[N]);
}