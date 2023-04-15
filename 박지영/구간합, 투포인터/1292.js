const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const solution = arr => {
  const save = [];
  for (let i = 1; i <= 1000; i++) {
    //먼저 배열에 1, 22, 333, 이렇게 값을 넣어준다
    for (let j = 0; j < i; j++) save.push(i);
    if (save.length >= arr[1]) break;
  }
  //구간합 구하기
  //b부터 a-1까지
  return save.slice(arr[0] - 1, arr[1]).reduce((x, y) => x + y, 0);
};

console.log(solution(input));