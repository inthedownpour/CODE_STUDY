let [decimal, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

//숫자 표현 범위를 넘어서는 것은 소문자로 변환되므로
//toUpperCase를 통해 대문자로 변환해줘야 한다.
const result = decimal.toString(b).toUpperCase();

console.log(result);