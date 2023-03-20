const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let numA = +input[0];
let numB = +input[1];
let numC = +input[2];

if (numA == numB && numA == numC && numB == numC) {
    console.log(10000 + numA * 1000);
}else if(numA == numB) {
    console.log(1000 + numA * 100);
}else if(numB == numC) {
    console.log(1000 + numB * 100);
}else if(numA == numC) {
    console.log(1000 + numA * 100);
}
else {
    console.log(Math.max(numA, numB, numC)*100);
}

//다른 코드 훨씬 깔끔
// const [num1, num2, num3] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).sort((a, b) =>  a - b);
//sort() : 배열을 정렬하는 메소드
//sort((a, b) =>  a - b) : 오름차순
//sort((a, b) =>  b - a) : 내림차순

// if (num1 === num2 && num2 === num3) {
//     console.log(10000 + (num1 * 1000));
// } else if (num1 === num2 || num2 === num3) {
//     console.log(1000 + (num2 * 100));
// } else {
//     console.log(num3 * 100);
// }