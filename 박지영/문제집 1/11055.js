//https://leylaoriduck.tistory.com/527
let [n, ...numbers] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
numbers = numbers[0].split(' ').map(v => Number(v))
const dp = new Array(+n).fill(0);

for (let i = 0; i < +n; i++) {
    var max = 0;
    var maxIndex = -1;
    for (let j = 0; j < i; j++) {
        if (numbers[j] < numbers[i] && dp[j] + max) {
            max = dp[j];
            maxIndex = j;
        }
    }
    if (maxIndex !== -1) {
        dp[i] = dp[maxIndex] + numbers[i];
    } else {
        dp[i] = numbers[i];
    }
}
console.log(Math.max(...dp));