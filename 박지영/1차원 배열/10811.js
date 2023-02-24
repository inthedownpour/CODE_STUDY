let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  let tmp = arr.splice(a - 1, b - a + 1).reverse();
  arr.splice(a - 1, 0, ...tmp);
}

console.log(...arr);


// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let line = input[0].split(' ');
// let N = +line[0];
// let M = +line[1];

// let I, J = 0;
// const result = [];
// for (let i = 0; i < N; i++) {
//     result[i] = i + 1;
// }

// for (let i = 1; i <= M; i++) {
//     const arr = input[i].split(' ');
//     I = arr[0];
//     J = arr[1];
//     console.log('I, J:', I, J)

//     for (let j = I - 1; j < J; j++) {
//         let temp = result[j];
//         result[j] = result[j+1];
//         result[j+1] = temp;
//     }
// }
// 앞으로 공백있는 출력은 이렇게 쓰자
// console.log(result.join(" "));