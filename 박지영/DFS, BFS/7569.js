// 응용 - 시작점이 여러 개일 때
// => 해결 방법 : 모든 시작점을 큐에 넣고 똑같이 bfs 돌리기
// 최소 일수 구하기 -> bfs 문제
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map((item) => item.split(" ").map((value) => +value));

let [m, n, h] = input.shift();

let box = [];
// 토마토 상자를 3차원 배열로 변환
for (let i = 0; i < input.length; i++) {
    box.push(input.slice(i, n + i));
    i += n - 1;
}

// const visited = new Array(h);
// for (let i = 0; i < n; i++) {
//     visited[i] = new Array(n);
//     for (let j = 0; j < m; j++) {
//         visited[i][j] = new Array(m);
//     }
// }

let visited = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array.from({ length: m }).fill(false))
);

let queue = []; // 익은 토마토의 위치
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            // 익은 토마토일 시 queue에 넣어 주변 익지않은 토마토 탐색
            if (box[i][j][k] === 1) {
                queue.push([i, j, k]);
            }
        }
    }
}

let index = 0;
const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1]; //위, 아래

while (queue.length > index) {
    let [z, y, x] = queue[index++];
    for (let i = 0; i < 6; i++) {
        nz = z + dz[i];
        nx = x + dx[i];
        ny = y + dy[i];

        if (0 <= nz && nz < h && 0 <= nx && nx < m && 0 <= ny && ny < n) {
            if (box[nz][ny][nx] === 0) {
                queue.push([nz, ny, nx]);
                box[nz][ny][nx] = box[z][y][x] + 1;
            }
        }
    }
}

let max = Number.MIN_SAFE_INTEGER;
let flag = false;
for (let i = 0; i < h; i++) {
    if (flag) break;
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (box[i][j][k] === 0) {
                flag = true;
            }
            max = Math.max(max, box[i][j][k]);
        }
    }
}

!flag ? console.log(max - 1) : console.log(-1);