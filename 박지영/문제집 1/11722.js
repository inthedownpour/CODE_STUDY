let [n, ...numbers] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
numbers = numbers[0].split(' ').map(v => Number(v))
//최소한 자기 자신은 가지고 있기 때문에 1로 채움
const dp = new Array(+n).fill(1);

for (let i = 1; i < +n; i++) {
    const values = [1];
    for (let j = 0; j < i; j++) {
        if (numbers[j] > numbers[i]) {
            values.push(dp[j] + 1);
        }
    }
    dp[i] = Math.max(...values);
}
console.log(Math.max(...dp));