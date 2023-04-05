// 최단거리 - bfs 유리
// bfs 사용시 최초로 도달했을 때 깊이를 출력하면 문제 해결 가능
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 미로 행렬
let miro = [];
for (let i = 1; i <= n; i++) {
    miro.push(input[i].split('').map(Number));
}
// 방문 여부 체크를 위한 행렬
const check = Array.from({ length: n }, () => Array(m).fill(0));

function bfs(row, col) {
    // 상하좌우를 탐색하기 위한 define값 정의 변수
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [];
    queue.push([row, col]);
    check[row][col] = 1; //방문했으면 표시

    while (queue.length) {
        //큐는 선입선출이니까, 맨 앞부터 꺼낸다
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            // (nx, ny)는 이동 가능성이 있는 좌표
            const [nx, ny] = [x + dx[i], y + dy[i]];
            // 미로를 벗어나는 좌표는 제외
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            // 길이가 있고, 방문하지 않았다면 방문
            if (miro[nx][ny] && !check[nx][ny]) {
                // (x,y)의 값이 (x,y)까지 최단경로에 해당한다.
                check[nx][ny] = check[x][y] + 1;
                // BFS(너비 우선)로 현재 위치에서 갈 수 있는 좌표를 모두 큐에 넣어준다.
                queue.push([nx, ny])
            }
        }
    }
}

bfs(0, 0);
console.log(check[n - 1][m - 1]);