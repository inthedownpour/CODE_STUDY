const fs = require('fs');
let input = fs.readFileSync('백준/Q1476/input.txt').toString().split(' ');
const E = input[0];
const S = input[1];
const M = input[2];

let count = 1;

while (true) {
    if (
        (count - E) % 15 === 0 &&
        (count - S) % 28 === 0 &&
        (count - M) % 19 === 0
    ) {
        console.log(count);
        break;
    }
    count++;
}

// a로 나누면 나머지가 3, b로 나누면 나머지가 4, c로 나누면 나머지가 5일 때 x 값을 구하라는 문제를 생각해보자
// x - 3은 a로 나누면 나머지가 0이다.
// x - 4는 b로 나누면 나머지가 0이다.
// x - 5는 c로 나누면 나머지가 0이다.
// 따라서 저 조건을 모두 만족하는 수를 구하면 된다. 이 문제도 같은 방식이다.