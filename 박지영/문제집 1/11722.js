//https://developer-mac.tistory.com/72
let [n, ...numbers] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
numbers = numbers[0].split(' ').map(v => Number(v))
//최소한 자기 자신은 가지고 있기 때문에 1로 채움
const dp = new Array(+n).fill(1);

for (let i = 1; i < +n; i++) {
    const values = [1];
    for (let j = 0; j < i; j++) {
        // 뒤에꺼가 앞에거보다 작으면 +
        if (numbers[j] > numbers[i]) {
            values.push(dp[j] + 1);
        }
    }
    dp[i] = Math.max(...values);
}
console.log(Math.max(...dp));


// var fs = require('fs');
// var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
// var cases = Number(inputs[0]);
// var inputs = inputs[1].split(' ').map(v=>Number(v));
// var dp = [];
// for(var i=0; i<cases; i++){
//     var max = 0;
//     for(var j=0; j<i; j++){
//         if(inputs[i] < inputs[j] && dp[j] > max){
//             max = dp[j];
//         }
//     }
//     dp[i] = max + 1;
// }
// console.log(Math.max(...dp));