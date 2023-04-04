// 2차원 행렬의 dp문제
// https://yabmoons.tistory.com/128
// https://amunre21.github.io/boj/3-2225/
let [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// DP[a][b] = c 의 의미는 "a개 더해서 그 합이 b가 되는 경우의 수는 c개 입니다."
// 즉, 우리가 구해야 할 결과값은 DP[K][N]의 값이다.
let dp = [];

for (let i = 0; i <= k; i++) {
    dp[i] = new Array(n + 1);
}

// 어떤 수를 한 개만 더해서 N이 나오는 경우의 수는 N값 자신 하나다.
for (let i = 0; i <= n; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
        if (j == 0) {
            dp[i][j] = 1;
        } else {
            dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
        }
    }
}

console.log(dp[k][n]);