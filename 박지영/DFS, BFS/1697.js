// bfs
// bfs함수 안에서 shift()하고 검사를 하지 않고
// 큐에 3가지 경로를 넣을 때 위치를 동생의 위치와 비교하면
// 이동횟수 없이 현재 동생과 수빈이의 위치가 같을 때 답이 0이 안나온다.
// 따라서 맨 처음에 큐에서 shift()로 뽑을 때 위치비교를 해줘야 한다
const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const visited = Array.from({ length: 100001 }, () => 0);

function bfs(n, k) {
    const queue = [];
    queue.push([n, 0]); // 0부터 시작
    visited[n] = 1; // 방문표시

    while (queue.length) {
        const [cur, time] = queue.shift();
        if (cur === k) return time; // 처음으로 위치가 k인 경우가 동생에게 갈 수 있는 최소 이동 횟수
        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(bfs(n, k));