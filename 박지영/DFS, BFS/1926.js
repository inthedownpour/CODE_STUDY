const fs = require("fs");
const [nm, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = nm.split(' ').map(Number);
let picture = input.map((item) => item.split(' ').map((v) => +v));

// 방문한 노드를 표시
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

let answer = 0; // 그림의 갯수
let result = [];

function bfs(x, y) {
    const queue = [[x, y]];
    let total = 0; // 그림의 넓이 카운트(pop마다 증가시키면 됨)
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];

    while (queue.length) {
        const [x, y] = queue.shift();
        total++;
        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];
            // 범위를 넘어가면 재탐색
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            // 이미 방문한 노드면 재탐색
            if (visited[nx][ny]) continue;
            if (picture[nx][ny] === 1) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
    if (total) { // 그림의 넓이가 계산되어 있다면
        answer++; // 그림의 갯수 +1
        result.push(total); // result에 그림의 넓이 push
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (picture[i][j] === 1 && !visited[i][j]) {
            visited[i][j] = true;
            bfs(i, j);
        }
    }
}

if (!answer) {
    console.log(0 + '\n' + 0);
} else {
    console.log(answer + '\n' + Math.max(...result));
}