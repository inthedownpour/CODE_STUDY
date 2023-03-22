//https://amunre21.github.io/boj/2-1699/
const input = require('fs').readFileSync('/dev/stdin').toString();

let dp = [];
for (let i = 0; i <= +input; i++) {
    //모든 숫자는 i^2로 표현하는 것이 최댓값을 가지므로
    //i=0부터 input까지의 반복문을 통해 각 i번째 항의 값이 i인 배열을 만들어준다
    dp.push(i);
}

for (let i = 1; i <= +input; i++) {
    for (let j = 1; j**2 <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i-j**2]+1)
    }
}

console.log(dp.pop());


// n 값보다 작은 최대 제곱수를 빼주고 남은 값을 반복?
// 틀림

// n 보다 작은 제곱수들을 뺸 결과들 중 최소값
// 43 = min(dp(43-6^2), dp(43-5^2), dp(43-4^2), dp(43-3^2), dp(43-2^2), dp(43-1^2))