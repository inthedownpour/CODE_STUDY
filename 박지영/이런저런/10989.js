//메모리 초과로 백준 풀이 불가
let [...input] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

input.sort((a, b) => {
    return a - b;
})

console.log(input.join('\n'))