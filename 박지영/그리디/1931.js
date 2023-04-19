let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((e) => e.split(' ').map(Number));

// 현재 시간이 t라고 할 때 시작 시간이 t 이상인 모든 회의 중에서
// 가장 먼저 끝나는 회의를 택하는 것이 최적해이다
const solution = (n, arr) => {
    arr.sort((a, b)=>{
        // 끝나는 시간에 맞춰 정렬
        // 회의 끝나는 시간이 동일하다면 시작 시간으로 정렬
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        };
    })

    let count = 1;
    let temp = arr[0][1];

    for (let i = 1; i < +n; i++) {
        if (temp <= arr[i][0]) {
            temp = arr[i][1];
            count++;
        }
    }
    return count;
}

console.log(solution(n, arr));