let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
// const n = +input[0];
const arr = input[1].split(' ').map(Number);

let set = new Set(arr);
const sorted = [...set].sort((a, b) => a - b);

let dic = {};
sorted.forEach((e, index) => { dic[e] = index });

let answer = '';
for (let i = 0; i < arr.length; i++) {
    answer += dic[arr[i]] + ' ';
}
console.log(answer);