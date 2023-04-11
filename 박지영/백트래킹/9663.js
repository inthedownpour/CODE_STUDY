const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 2차원 배열 접근은 시간 초과
// 시간 초과를 피하기 위해 1차원 배열 이용 + 대각선 체크
const solution = (n) => {
    // 각 행의 열마다 방문 여부를 확인
    const rows = new Array(n).fill(0);
    let cnt = 0;

    // L행 X열에 퀸을 둘 수 있는지 판단하기 위해 0~L-1행까지
    // 상하좌우 + 대각선까지 조회
    function isPossible(row) {
        for (let i = 0; i < row; i++) {
            // 이미 방문했으면
            if (rows[row] === rows[i]) return false;
            // 대각선 : x와 y의 절댓값이 같은 값으로 좌표를 이동
            // 이미 놓인 퀸(Qx, Qy),검사할 좌표(x,y)일때 |Qx-x| == |Qy-y|
            if (Math.abs(rows[row] - rows[i]) === row - i) return false;
        }
        return true;
    }

    function dfs(row) {
        // 성공적으로 N행까지 퀸을 위치시켰다면 카운트를 증가
        if (row === n) {
            cnt++;
            return;
        }

        for (let i = 0; i < n; i++) {
            // L행 i열에 둘 수 있다면 실행
            if (rows[row]) continue;
            rows[row] = i;
            if (isPossible(row)) dfs(row + 1);
            rows[row] = 0;
        }
    }
    dfs(0);
    return cnt;
};

console.log(solution(+input));