//https://dnf-lover.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-9095%EB%B2%88-1-2-3-%EB%8D%94%ED%95%98%EA%B8%B0-DP-%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-JAVA
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