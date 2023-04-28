// https://kau-algorithm.tistory.com/800?category=988341
// 모든 상황을 고려해서 최대 수익을 찾아야 한다
const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((v) => v.split(' ').map(Number));

n = n[0];
const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
    const [day, money] = arr[i];
    // 퇴사 전에 처리할 수 없는 일은 건너뛴다.
    if (i + day > n) continue;
    // 이미 진행한 상담으로 생긴 수익 + 해당일에 있는 상담을 진행했을 때 얻는 수익을 DP에 저장
    dp[i] += money;

    // 해당 상담을 진행했을 경우와 다른 상담을 진행했을 경우의 최댓값을 비교하여 DP에 저장
    for (let j = i + day; j < n; j++) {
        dp[j] = Math.max(dp[j], dp[i]);
    }
}
console.log(Math.max(...dp));