let [str, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const result = parseInt(str, +b)

console.log(result);