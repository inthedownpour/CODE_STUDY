const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const visited = Array.from({ length: 100001 }, () => 0);

function bfs(n, k) {
    const queue = [];
    queue.push([n, 0]);
    visited[n] = 1;

    while (queue.length) {
        const [cur, time] = queue.shift();
        if (cur === k) return time;
        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(bfs(n, k));