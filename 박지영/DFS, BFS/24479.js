//https://coooco.tistory.com/57
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m, r] = input[0].split(' ').map(Number);

let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
}

for (let i = 1; i <= m; i++) {
    let [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

graph.forEach((e) => {
    e.sort((a, b) => a - b);
})

const visited = new Array(n + 1).fill(false);
const answer = new Array(n).fill(0);
let cnt = 1;

function dfs(v) {
    visited[v] = true;
    answer[v - 1] = cnt++;
    for (const next of graph[v]) {
        if (visited[next]) continue;
        dfs(+next);
    }
}

dfs(r);
console.log(answer.join('\n'));