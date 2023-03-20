let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = input[0];
const arr = input[1].split(' ');
arr.sort((a,b)=>{return a-b});

console.log(`${arr[0]} ${arr[N - 1]}`)

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// input.shift();

// const numbers = input[0].split(" ").map(Number);
// console.log(Math.min(...numbers) + " " + Math.max(...numbers));