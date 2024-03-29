// 2차원 배열의 sort() 사용법!
const input = require('fs').readFileSync(0).toString().trim().split('\n');
const testCase = input.shift();

let arr = [];
for (let i = 0; i < testCase; i++) {
    const cells = [];
    for (let j = 0; j < 2; j++) {
        cells.push(input[i].split(' ')[j])
    }
    arr.push(cells)
}
// 시간 초과 조심 ㅜㅜ
// 1. sort() 1번만 사용하기
// 2. console.log() 1번만 사용하기
let answer = '';
arr.sort((a, b) => {
    // sort()의 2차원 배열 정렬
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    };
}).forEach(e => {
    answer += `${e[0]} ${e[1]}\n`;
})

console.log(answer);