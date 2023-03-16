const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);
const DP = new Array(num + 1).fill(0);

// 반복문을 2부터 시작하는 이유 :
// DP[1] = 0으로 1이 1로 되는데 필요한 연산은 0회
for (let i = 2; i <= num; i++) {
    // DP[i-1] (i-1이 1이 되는데 필요한 최소한의 연산)
    // + 1 (i에서 1을 빼서 i-1이 되는데 필요한 연산 횟수 1회)로 초기화
    DP[i] = DP[i - 1] + 1;
    // 1. dp[2] = dp[1] + 1 = 1
    // 2. dp[3] = dp[2] + 1 = 2
    // 3. dp[4] = dp[3] + 1 = 2
    // 4. dp[5] = dp[4] + 1 = 3
    // 5. dp[6] = dp[5] + 1 = 4 => 2저장

    if (i % 2 === 0) {
        //그 다음 경우에 현재 DP[i]와 DP[i/2]+1
        //연산횟수 중 작은값으로 DP[i] 업데이트
        DP[i] = Math.min(DP[i], DP[i / 2] + 1);
        // dp[2] = math.min(dp[2], dp[1] +1 )
        // dp[4] = math.min(dp[4], dp[2] +1 ) => 2저장
        // dp[6] = math.min(dp[6], dp[3] +1 ) => 2저장
    }

    if (i % 3 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1);
        // dp[3] = math.min(dp[3], dp[1] +1 ) =>1저장
        // dp[6] = math.min(dp[6], dp[2] +1 ) =>2저장
    }
}

console.log(DP[num]);

// DP(동적계획법) 풀이
//     => 어떻게 점화식을 도출해야 할까 ?
// 일단 bottom-up 방식으로 1부터 n까지 올라가며 연산 횟수의 최솟값 저장

// 1. 3으로 나눠 떨어지는 경우 dp[n] = dp[n / 3] + 1
// 2. 2로 나눠 떨어지는 경우 dp[n] = dp[n / 2] + 1
// 3. 3으로 나눠 떨어지는 경우 dp[n] = dp[n - 1] + 1

// input = 1 계산 1 최소횟수 0
// input = 2 계산 2-1=1, 2/2=1 최소횟수 1
// input = 3 계산 3/3=1 최소횟수 1
// input = 4 계산 (4-1)/3=1, 4/2/2=1 최소횟수 2
// input = 5 계산 (5-1)/2/2=1, (5-1-1)/3=1 최소횟수 3
// input = 6 계산 6/2/3=1, 6/3/2=1 최소횟수 2