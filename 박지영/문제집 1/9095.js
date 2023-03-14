let input = require('fs').readFileSync('/dev/stdin').toString();

input = input.split("\n").map(v => parseInt(v));
const testNum = input.shift();

// dp 배열에서 dp[1]일때 1이, dp[2]일때 2이 나왔음하므로 dp[0]에 0을 추가해줬다.
// 즉, N과 인덱스를 맞추기 위해
let dp = [0,1,2,4]

for (let i=4; i < 11; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

for (let i=0; i < testNum; i++) {
    console.log(dp[input[i]]);
}