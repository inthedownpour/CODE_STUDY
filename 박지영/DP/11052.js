//https://kosaf04pyh.tistory.com/223
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0]
const card = input[1].split(' ').map(Number)
let dp = [0, ...card]

//1개는 비교할 대상이 없지만, 2부터는 있다.
for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < i; j++) { //N 전까지 반복
        dp[i] = Math.max(dp[i], (dp[i - j] + dp[j]));
        console.log(i, i -j, j)
    }
}

console.log(dp[N])