let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];

for (let i = 1; i <= T; i++) {
    let temp = input[i].split('');
    console.log(temp[0] + temp[temp.length - 1]);
}

// const char = require('fs').readFileSync("/dev/stdin").toString().split("\n");

// for (let i = 1; i <= parseInt(char[0]); i++) {
//     console.log(`${char[i].slice(0, 1)}${char[i].slice(-1)}`);
// }

// slice 함수는 배열로부터 특정 범위를 복사한 값들을 담고 있는
// 새로운 배열을 만드는데 사용
// 첫 번째 인자로 시작 인덱스, 두 번째 인자로 종료 인덱스
// 시작부터 종료 인덱스까지 값을 복사하여 반환

// slice(-1)은 배열의 마지막 1개의 요소를 추출
// slice(-n)은 배열의 마지막 n개의 요소를 추출
// slice(0, 1)은 배열의 0번부터 1번까지의 요소를 추출