let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");


console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]))