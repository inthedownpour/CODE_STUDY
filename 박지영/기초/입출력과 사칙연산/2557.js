//testCase는 N과 N명의 점수 배열로 이루어짐
/*

C = 5
testCase = [
    {
        N:5,
        arr: [50, 50, 70, 80, 100]
    }
    {
        N:7,
        arr: [100, 95, 90, 80, 70, 60, 50]
    }
    ...
]

*/

const fs = require('fs');
const { default: test } = require('node:test');
//readFileSync에 '/dev/stdin'를 넣어야 백준에서 입력값을 받을 수 있다.
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');

const inputC = +input[0];
const inputTestCase = [];

for (let i = 0; i< inputC; ++i) {
    const arr = input[i].split(' ').map((item) => +item)
    let newArr = []; //새로운 배열
    //새로운 배열에 첫번째 값을 제외한 기존 배열의 값들 삽입
    for (let j = 0; j < arr.length; ++j) {
        newArr.push(arr[j]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr
    };
    inputTestCase.push(testCase);

}

solution(inputC, inputTestCase);

function solution(C, inputTestCase) {
    console.log('Hello World!');
}