// 단순히 그래프를 내려가는 용도가 아니라
// 특정한 점에서의 반복을 통한 경우의 수를 얻고자 할 때는
// 재귀를 사용하여 접근 하는 DFS가 굉장한 효율을 낼 수 있다
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const numbers = input[1].split(' ').map(Number);
const operator = input[2].split(' ').map(Number);

const operObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
        if (oper1 < 0) {
            return -Math.floor(-oper1 / oper2);
        }
        return Math.floor(oper1 / oper2);
    } // operObj 객체에 순차적으로 덧셈, 뺄셈, 곱셈, 나눗셈을 선언해둔다.
};

const temp = [];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

function dfs(L) {
    // 연산자는 숫자의 개수보다 1개 적으므로,
    // 누적된 연산자가 N-1개라면 최대 최소값을 판단 할 것.
    if (L === n - 1) {
      let oper1 = numbers[0];
      for (let i = 0; i < temp.length; i++) {
        const oper2 = numbers[i + 1];
        let idx = temp[i];
        // operObj 객체를 이용해서 연산자에 따른 연산을 순차적으로 수행
        oper1 = operObj[idx](oper1, oper2);
      }

      if (oper1 > max) max = oper1;
      if (oper1 < min) min = oper1;
    }

    for (let i = 0; i < 4; i++) {
      if (!operator[i]) continue; // 가지치기
      operator[i] -= 1;
      temp.push(i);
      dfs(L + 1);
      operator[i] += 1;
      temp.pop();
    } // 모든 경우의 수를 따져야 하므로 재귀가 끝나면 연산자 배열과 임시 배열을 원래대로 되돌려야 한다.
  }

  dfs(0);

  console.log(`${max}\n${min}`);