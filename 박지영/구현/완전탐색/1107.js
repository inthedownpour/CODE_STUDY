// https://jaekwan.tistory.com/226
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = +input[0].trim();
const M = +input[1].trim();
let broken = [];
if (M !== 0) {
    broken = input.slice(2)[0].split(' ').map(_ => Number(_.trim()));
}

let isBroken = new Array(10).fill(true);

for (let i = 0; i < broken.length; i++) {
    isBroken[broken[i]] = false // 고장난 버튼을 표기한다
}

console.log(solution(N, M, isBroken))

function solution(N, M, isBroken) {
    if (N === 100) return 0;

    let dist = Math.abs(N - 100); // N번 채널과의 차이.
    let min = dist; // 버튼을 누르는 횟수다.

    // 모든 경우의 수를 탐색
    for (let i = 0; i <= 999900; i++) {
        let check = true;
        let cur = i.toString(); //자릿수마다 연산해주기 위해
        for (let j = 0; j < cur.length; j++) {
            if (!isBroken[cur[j]]) {
                check = false;
                break;
            }
        }

        if (check) {
            cur = Number(cur);
            let newDist = Math.abs(N - cur);
            if (newDist < dist) { // 100번에서 가는거보다 cur 에서 가는게 더 빠르다.    // 거리가 멀지만 더 적게 눌러서 이동할 수 있는 경우가 있나? 자릿수가 바뀔때?
                // 실제로 cur로 이동해서 얼마나 걸리는 계산한다.
                let temp = 0;
                temp += cur.toString().length; // 숫자 버튼 누르는 횟수.
                temp += Math.abs(N - cur);  // +- 버튼 누르는 횟수.
                if (temp < min) {  // 실제로 버튼을 누르는 횟수가 더 적다.
                    dist = Math.abs(N - cur);
                    min = temp;
                }
            }
        }
    }
    return min;
}