let [testCase, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e) => e.split(' ').map(Number));

for (let i = 0; i < input.length; i += 3) {
    const l = input[i][0];
    let map = Array.from({ length: l }, () => Array.from({ length: l }).fill(0));
    const [curX, curY] = input[i + 1];
    const [moveX, moveY] = input[i + 2];
    map[curX][curY] = 1;

    function bfs() {
        let queue = [];
        queue.push([curX, curY]);

        const dx = [1, 2, 2, 1, -1, -2, -2, -1];
        const dy = [2, 1, -1, -2, -2, -1, 1, 2];

        while (queue.length) {
            const [x, y] = queue.shift();
            if (x === moveX && y === moveY) {
                // 시작 위치 값을 0이 아닌 1로 설정했으므로, 최종 도착 값에서 1을 빼준다.
                return map[x][y] - 1;
            }
            for (let i = 0; i < 8; i++) {
                const [nx, ny] = [x + dx[i], y + dy[i]];
                if (nx >= l || ny >= l || nx < 0 || ny < 0) continue;
                if (!map[nx][ny]) {
                    // visit[x][y]는 (x,y)까지의 최단경로이므로, 1을 더해주면 (nx,ny)까지의 최단경로.
                    map[nx][ny] = map[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    console.log(bfs());
}