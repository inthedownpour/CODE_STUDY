// 바이토닉 수열
// 가장 긴 수열을 정방향에서 찾고, 역방향에서 찾으면 풀리지 않을까?

// 직전 상황에 따라 현재 상황이 좌우된다면,
// 직전의 상황을 상황별로 저장해두면 된다.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
let nums = input[1].split(' ').map(Number);

const increaseDP = new Array(n).fill(1);
const decreaseDP = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
    const cur = nums[i];
    let cnt = 1;
    for (let j = 0; j < i; j++) {
        if (cur > nums[j]) {
            cnt = Math.max(cnt, increaseDP[j] + 1);
        }
    }
    increaseDP[i] = cnt;
}

// 현재 index와 이후의 index를 비교하면서 현재 index의 값이 비교하는 index의 값보다 큰 경우
// 현재 cnt값과 비교 index의 decreaseDP + 1과 비교하여 큰 값을 cnt로 갱신
for (let i = n - 1; i >= 0; i--) {
    const cur = nums[i];
    let cnt = 1;
    for (let j = i + 1; j < n; j++) {
        if (cur > nums[j]) {
            cnt = Math.max(cnt, decreaseDP[j] + 1);
        }
    }
    decreaseDP[i] = cnt;
}

// increaseDP[i] + decreaseDP[i] 의 최댓값을 구한다.
// 최댓값에서 -1한 값이 가장 긴 바이토닉 부분 수열이다.
console.log(
    Math.max(...increaseDP.map((incVal, index) => incVal + decreaseDP[index])) - 1
);