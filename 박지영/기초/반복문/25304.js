const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let inputX = +input[0];
let inputN = +input[1];

let sum = 0;
for (let i = 2; i < inputN+2; i++) {
    const arr = input[i].split(' ').map((item) => +item);
    sum = sum + (arr[0] * arr[1]);
}

if (sum == inputX) {
    console.log('Yes');
}else {
    console.log('No');
}

//삼항연산자 사용으로 코드를 줄여보자
//console.log(total === sum ? "Yes" : "No");