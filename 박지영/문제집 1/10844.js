const input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input);
const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
);
const mod = 1000000000;

for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
        if (j == 0) {
            dp[i][0] = dp[i - 1][1];
        } else if (j == 9) {
            dp[i][9] = dp[i - 1][8];
        } else {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1]
        }
        dp[i][j] %= mod;
    }
}

let ans = 0;
for (let i = 0; i < 10; i++) {
  ans += dp[n][i];
  ans %= mod;
}

console.log(ans);

// N = 1
// 1, 2, 3, 4, 5, 6, ,,,,
// N = 2
// 10, 12, 21, 23, 32, 34, 43, ,,, ,98

// dp[i][j] = 길이가 i이고 끝자리가 j(0~9)로 끝나는 계단수의 개수
// i = 1 : dp[1][j]를 1로 초기화해놓고 dp 탐색 시작
// i >= 2
// - dp[i][0] : 길이가 하나 적은 dp[i-1]의 1번째 인덱스 즉, dp[i-1][1]밖에 올 수 없다
// - dp[i][9] : 길이가 하나 적은 dp[i-1]의 8번째 인덱스  즉, dp[i-1][8]밖에 올 수 없다
// - dp[i][j](1<=j<=8) : 길이가 하나 적은 dp[i-1]의 j-1번째, j+1번째 인덱스가 올 수 있다.

// 왜 정답을 두 번 나눔?