// https://velog.io/@js43o/%EB%B0%B1%EC%A4%80-12865%EB%B2%88-%ED%8F%89%EB%B2%94%ED%95%9C-%EB%B0%B0%EB%82%AD
// 그리디 문제 아님 ! dp 문제
const [nk, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = nk.split(' ').map(Number);
const arr = input.map((e) => e.split(' ').map(Number));

// dp[i][j] = i 번째 물건을 넣을지 말지 결정하는 경우,
// j무게 만큼 물건을 넣었을 때 가방에 넣을 수 있는 물건의 최대 가치
// i는 현재 넣을지 말지 보고있는 물건
// j는 현재 배낭의 무게고 현재 물건 i의 무게부터 끝까지 순환
const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
    const [w, v] = arr[i - 1];

    for (let j = 1; j <= k; j++) {
        if (j - w >= 0) {
            dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}

console.log(dp[n][k]);