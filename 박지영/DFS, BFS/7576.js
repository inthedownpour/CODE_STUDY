// https://velog.io/@dev-redo/%EB%B0%B1%EC%A4%80-7576%EB%B2%88-%ED%86%A0%EB%A7%88%ED%86%A0-NodeJS
// 응용 - 시작점이 여러 개일 때
// => 해결 방법 : 모든 시작점을 큐에 넣고 똑같이 bfs 돌리기
// 최소 일수 구하기 -> bfs 문제
const fs = require("fs");
const [mn, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [m, n] = mn.split(' ').map(Number);
let box = input.map((item) => item.split(' ').map((v) => +v));

function solution(n, m, box) {
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    const queue = [];

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 익은 토마토일 시 queue에 넣어 주변 익지않은 토마토 탐색
            if (box[i][j] === 1) {
                queue.push([i, j]);
            }
            // 익지 않은 토마토일 시
            if (box[i][j] === 0) {
                visited[i][j] = -1;
            }
        }
    }

    let head = 0; // 참조하고 있는 큐의 idx
    // 해당 문제 풀이시 shift() 사용시 시간초과
    // 익은 토마토만 queue에 있음
    while (queue.length > head) {
        const [x, y] = queue[head++];
        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];
            // 범위를 넘어갈 시 통과
            if (nx < 0 || ny < 0 || nx >= n || ny > m) continue;
            // 익었거나 빈칸일 시 통과
            if (visited[nx][ny] >= 0) continue;
            // 익지 않은 토마토에 대해 +1
            visited[nx][ny] = visited[x][y] + 1;
            // 주변 토마토 탐색
            queue.push([nx, ny]);
        }
    }

    // 토마토가 익을 때까지의 최소 날짜 출력
    let day = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            //익지 않은 토마토가 존재
            if (visited[i][j] === -1) return -1;
            day = Math.max(day, visited[i][j]);
        }
    }
    return day;
}

console.log(solution(n, m, box));