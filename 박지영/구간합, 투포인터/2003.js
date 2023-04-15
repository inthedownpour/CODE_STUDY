// 투포인터
const [[n, m], arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e)=>e.split(' ').map(Number));

const solution = (n, m, arr) => {
  let answerNum = 0;
  let start = 0;
  let end = 0;
  //let loopCount = 0;
  let result = 0;

  while (arr[start] !== undefined) {
    while (result < m && end < arr.length) {
        result += arr[end];
        end++;
    }
    if (result === m) {
        answerNum++;
    }
    result -= arr[start];
    start++;
    //loopCount++;
  }
  return answerNum
};

console.log(solution(n, m, arr));