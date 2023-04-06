const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const dy = [0, 0, 1, -1, -1, 1, 1, -1] // 우상
const dx = [1, -1, 0, 0, 1, 1, -1, -1] // 우상 우하 좌하 좌상

var bfs = (i, j, n, m, graph) => {
    let pos = [];
    pos.push([i, j]);
    while (pos.length !== 0) {
        let [x, y] = pos.shift();
        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if (graph[nx][ny] !== 1) continue;
            pos.push([nx, ny]);
            graph[nx][ny] = 0;
        }
    }
}

while (true) {
    const [N, M] = input.shift().split(" ").map(Number);
    if (N === 0 && M === 0) return;
    let cnt = 0;
    let graph = new Array(M);
    for (let i = 0; i < M; i++) graph[i] = input.shift().split(" ").map(Number);

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] === 1) {
                graph[i][j] = 0;
                bfs(i, j, N, M, graph);
                cnt += 1;
            }
        }
    }
    console.log(cnt);
}