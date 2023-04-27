// 배열의 최대 크기가 8이다.
// => 모든 경우의 수를 다 따져봐도 되겠다. 완전탐색!
// 주어진 배열에서 순서를 적절히 바꿔 얻을 수 있는 모든 경우를 구하려면?
// => 백트래킹
let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const arr = input[1].split(' ').sort((a, b) => a - b).map(Number);

// 주어진 길이로 만들 수 있는 모든 순열(중복X, 순서O)을 만들어서 비교
const solution = () => {
    let max = 0;
    const permutation = [];
    const selected = Array(n).fill(false);

    const recursion = () => {
        // 만약 이미 n개의 수가 선택되었다면
        // n개의 수에 대해서 연산을 한 결과값을 max와 비교하여 최댓값을 갱신
        if (permutation.length === n) {
            let sum = 0;
            for (let i = 0; i < n - 1; i++) {
                sum += Math.abs(permutation[i] - permutation[i + 1]);
            }
            if (max < sum) {
                max = sum;
            }
        } else {
            // for문을 돌면서 n개 중 아직 선택되지 않은 수를 고르고
            for (let i = 0; i < n; i++) {
                if (selected[i]) continue;
                // permutation에 push
                permutation.push(arr[i]);
                // 수가 선택되었음을 selected를 갱신하여 표시
                selected[i] = true;
                // 수를 하나 선택했으면 재귀호출을 통해 위 과정을 반복
                recursion();
                // 재귀호출이 끝나면 직전에 선택한 수를 선택해제
                // permutation에서 pop하고 selected도 갱신
                permutation.pop();
                selected[i] = false;
            }
        }
    }
    //n!의 모든 경우를 다 탐색하고 모든 재귀호출이 종료된다
    recursion();
    console.log(max);
};

solution();