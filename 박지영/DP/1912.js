//https://amunre21.github.io/boj/1-1912/
let [n, ...numbers] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
numbers = numbers[0].split(' ').map(v => Number(v))
const dp = [];

//첫번째 자릿수부터 비교위해 0번 인덱스부터 시작
for (let i = 0; i < +n; i++) {
    dp[i] = numbers[i];
    //그 전까지의 합이 i번째보다 큰지 안큰지 비교해야 한다.
    //우리는 10-4+3+1+5+6-35 까지의 합보다 그냥 12+21이 크다는것을 눈으로 알 수 있다.
    //하지만, 컴퓨터는 (10-4+3+1+5+6-35)+12의 합이 클지 그냥 12가 클지 비교해 봐야한다.
    if (dp[i] < dp[i - 1] + numbers[i]) {
        dp[i] = dp[i - 1] + numbers[i];
    }
}
console.log(Math.max(...dp));