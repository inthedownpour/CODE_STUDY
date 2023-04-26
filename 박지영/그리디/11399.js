let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input[1].split(' ').sort((a, b) => a - b).map(Number);

let sum = [arr[0]];
let temp = arr[0];
for (let i = 1; i < arr.length; i++) {
    temp += arr[i];
    sum.push(temp);
}

const answer = sum.reduce((acc, cur, idx) => { return acc += cur }, 0);
console.log(answer);


// let total =0;
// let sum=0;
// for(let i =0; i<arr.length; i++){
//     total +=sum +arr[i];
//     sum += arr[i];
// }
// console.log(total);