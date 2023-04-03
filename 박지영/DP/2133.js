//https://yabmoons.tistory.com/536
let input = require('fs').readFileSync('/dev/stdin').toString();
let n = +input;

if (n % 2 !== 0) return console.log(0);

const dp = new Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 0;
dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * dp[2];
    for (let j = i - 4; j >= 0; j -= 2) {
        dp[i] = dp[i] + (dp[j] * 2);
    }
}

console.log(dp[n]);