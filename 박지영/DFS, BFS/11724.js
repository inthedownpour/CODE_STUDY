//연결 되어 있는 노드들의 개수 찾기(=연결 요소의 개수)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
}

for (let i = 0; i < m; i++) {
    let [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

graph.forEach((element) => {
    element.sort((a, b) => a - b);
});

//DFS또는 BFS의 횟수를 계산 해 준다면 연결 요소의 개수를 알 수 있다.
let visited = new Array(n+1).fill(0);
function DFS(v) {
    if (visited[v]) return;
    visited[v] = 1;
    for (let i = 0; i < graph[v].length; i++) {
        let next = graph[v][i];
        if (visited[next] === 0) {
            DFS(next);
        }
    }
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
        DFS(i);
        cnt++;
    }
}

console.log(cnt);