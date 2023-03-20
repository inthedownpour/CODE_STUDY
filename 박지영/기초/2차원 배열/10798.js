//한번에 2차원 배열 생성
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i => i.trim().split(''));
let answer = [];
//2차원 배열이니까 행마다 하나씩 돌겠지?
//0행 요소 개수, 1행 요소 개수,,,,
let column = Math.max(...input.map(i=>i.length));

for (let i = 0; i < column; i++) {
    for (let j = 0; j < input.length; j++) {
        answer.push(input[j][i]);
    }
}
console.log(answer.join(''));