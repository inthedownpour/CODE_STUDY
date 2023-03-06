const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(i => i.trim().split(' ').map(Number));

let arr = Array.from(new Array(9), () => new Array(9).fill(0));
let max = 0;
let position = '';

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        arr[i][j] = input[i][j];

        if (arr[i][j] > max) {
            max = arr[i][j]
            position = `${i + 1} ${j + 1}`;
        }else if(max === arr[0][0]) {
            max = arr[0][0]
            position = `1 1`;
        }
    }
}

console.log(max);
console.log(position);


// const nums = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

// let max = Math.max(...nums);

// console.log(max);
// console.log(nums.indexOf(max)+1)