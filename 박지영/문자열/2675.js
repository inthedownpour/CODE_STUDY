const { default: test } = require('node:test');

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];

for (let i = 1; i <= T; i++) {
    let answer = '';
    const [num, str] = input[i].split(' ');

    for (let j = 0; j < str.length; j++) {
        answer = answer + str[j].repeat(num);
    }
    console.log(answer);
}

// repeat : 문자열 일정하게 반복하기
// let test = '123';
testRepeat = test.repeat(3);
console.log(testRepeat) //"123123123"

let str

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let caseCount = Number(input[0]);
// let result = '';

// for (let i = 1; i <= caseCount; i++) {
//   let count = Number(input[i].split(' ')[0]);  // 각 케이스 당 문자 반복 횟수 (R)
//   let cases = input[i].split(' ')[1];  // 케이스 문자열 분리

//   for (let j = 0; j < cases.length; j++) {
//     for (let k = 0; k < count; k++) {
//       result += cases[j];
//     }
//   }
//   result += '\n';
// }

// console.log(result);