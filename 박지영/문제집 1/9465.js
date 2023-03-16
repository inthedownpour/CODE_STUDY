// https://fbtmdwhd33.tistory.com/76
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// testCase
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    let n = Number(input[3 * i]); // N

    let up = input[3 * i + 1].split(' ').map(v => Number(v)); // 0행
    let down = input[3 * i + 2].split(' ').map(v => Number(v)); // 1행

    let dp = [[0, up[0], down[0]]]; // 하나의 dp 2차원 배열 생성
    for (let j = 1; j < n; j++) {
        dp[j] = [
            Math.max(...dp[j - 1]),
            Math.max(dp[j - 1][0], dp[j - 1][2]) + up[j],
            Math.max(dp[j - 1][0], dp[j - 1][1]) + down[j]
        ]
    }
    console.log(Math.max(...dp[n - 1]))
}