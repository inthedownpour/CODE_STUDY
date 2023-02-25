let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let line = input[0].split(' ');
let N = +line[0];
let M = +line[1];

let I, J = 0;
const result = [];
for (let i = 0; i < N; i++) {
    result[i] = i + 1;
}

for (let i = 1; i <= M; i++) {
    const arr = input[i].split(' ');
    I = arr[0];
    J = arr[1];

    const temp = result[I-1];
    result[I-1] = result[J-1];
    result[J-1] = temp;
}
console.log(result.join(' '));


// const [[N, M], ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(n => +n));

// const arr = Array(N);
// for (let i = 0; i < N; i++) {
//   arr[i] = i+1;
// }

// for (let i = 0; i< M; i++) {
//   const [p1, p2] = input[i];

//   [arr[p1-1], arr[p2-1]] = [arr[p2-1], arr[p1-1]];
// }

// console.log(arr.join(' '));