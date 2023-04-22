const fs = require("fs");
let [rc, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const [r, c] = rc.split(' ').map(Number);
const board = input.map((e) => e.split(''));

function solution(r, c, board) {
    const dist1 = [...Array(r)].map(() => Array(c).fill(-1));
    const dist2 = [...Array(r)].map(() => Array(c).fill(-1));
    const q1 = [];
    const q2 = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (board[i][j] === 'F') {
                q1.push([i, j]);
                dist1[i][j] = 0;
            }
            if (board[i][j] === 'J') {
                q2.push([i, j]);
                dist2[i][j] = 0;
            }
        }
    }

    // 불 BFS
    let h1 = 0;
    while (q1.length > h1) {
        const [x, y] = q1[h1++];
        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
            if (dist1[nx][ny] >= 0 || board[nx][ny] === '#') continue;
            dist1[nx][ny] = dist1[x][y] + 1;
            q1.push([nx, ny]);
        }
    }

    // 지훈 BFS
    let h2 = 0;
    while (q2.length > h2) {
        const [x, y] = q2[h2++];
        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            // 범위를 벗어났다는 것은 탈출 성공했다는 말
            // 큐에 거리 순으로 들어가므로 최초에 탈출한 시간을 출력하면 됨
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
                return dist2[x][y] + 1;
            }
            // 이미 방문 or 벽(#)
            if (dist2[nx][ny] >= 0 || board[nx][ny] === '#') continue;
            // 이미 불(dist1[nx][ny] >= 0)이거나 지훈이가 도착했을 때 불(dist1[nx][ny] <= dist2[x][y]+1)
            if (dist1[nx][ny] !== -1 && dist1[nx][ny] <= dist2[x][y] + 1) continue;
            dist2[nx][ny] = dist2[x][y] + 1;
            q2.push([nx, ny]);
        }
    }
    // 탈출 실패
    return "IMPOSSIBLE";
}

console.log(solution(r, c, board));