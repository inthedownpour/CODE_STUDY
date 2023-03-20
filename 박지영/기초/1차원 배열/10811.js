let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  //splice는 원본 배열에 새로운 요소를 추가하거나 기존요소를 삭제 또는 교체하여
  //원본 배열을 변경하고 제거된 배열을 반환한다.
  //a-1은 배열의 변경을 시작할 인덱스
  //b-a+1은 삭제할 요소의 개수

  //reverse는 리스트를 역으로 만든다. 기존 리스트에 영향
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