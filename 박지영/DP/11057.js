const input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input);
var dp = [[], new Array(10).fill(1)];
for(var i=2; i<=n; i++){
    dp[i] = [];
    dp[i][0] = dp[i-1][0] % 10007;
    for(var j=1; j<10; j++){
    	dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 10007;
    }
}
console.log(dp[n].reduce((a,v)=> a+v, 0) % 10007);

// 2차원 배열에 i길이의 j로 끝나는 오르막 수의 개수를 저장

// i/j  0	1	2	3	4	5	6	7	8	9
// 1	1	1	1	1	1	1	1	1	1	1
// 2	1	2	3	4	5	6	7	8	9	10
// 3	1	3	6	10	15	21	28	36	45	55

// N=1인 경우는 모두 하나의 경우밖에 없기 때문에 1로 채워준다.
// 길이가 N이면서 0으로 끝나는 경우는 모두 하나밖에 없다.
// N=2인 경우는 00~09, 11~19, ,,, ,99로 0은 1번, 1은 2번, ,,, ,9는 10번 등장하게 된다.

// 규칙은 dp[2][1] = dp[1][1] + dp[2][1] 인 것을 알 수 있다.
// 즉, dp[i][j] = dp[i-1][j] + dp[i][j-1]