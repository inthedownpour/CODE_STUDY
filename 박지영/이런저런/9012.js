const input = require('fs').readFileSync(0).toString().trim().split('\n');
const testCase = input.shift();

let answer = ""
for (let i = 0; i < testCase; i++) {
    let count = 0;
    let splited = input[i].split('');
    for (const s in splited) {
        if (count < 0) {
            break;
        } else {
            if (splited[s] === '(') {
                count += 1;
            } else {
                count -= 1;
            }
        }
    }
    if (count === 0) {
        answer += 'YES\n';
    } else {
        answer += 'NO\n';
    }
}
console.log(answer)

// (가 입력되었을 때는 스택에 push,
// )가 입력되었을 때는 스택에서 pop하였다.

// ) 입력 시 스택에 값이 없다면
// (이 이전에 없거나, 이전의 연산으로 인해 남아있지 않은 것이므로
// NO가 출력되게 하였고,
// 모든 연산 후 스택에 값이 남아있다면 (이 입력된 후 )로 닫히지 않은 상태로 끝난 것이므로
// NO가 출력되게 하였다.

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const caseCount = Number(input[0]);

// for (let i = 1; i <= caseCount; i += 1) {
//   const cases = input[i];
//   const stack =  [];
//   let result = 'YES';

//   for (let j = 0; j < cases.length; j += 1) {
//     if (cases[j] === '(') {
//       stack.push(1);
//     } else {
//       if (!stack.pop()) {
//         result = 'NO';
//         break;
//       }
//     }
//   }

//   if (stack.length !== 0) {
//     result = 'NO';
//   }

//   console.log(result);
// }