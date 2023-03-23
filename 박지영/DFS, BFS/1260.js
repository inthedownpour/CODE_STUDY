const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// shitft 함수는 O(n)의 시간복잡도를 갖기때문에
// 문제에 따라서 shift 함수를 여러번 사용하면 시간초과에 걸리는 경우도 있다.
const [n, m, v] = input.shift().split(' ').map(Number);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
}

for (let i = 0; i < m; i++) {
    //양방향 그래프이므로 a,b를 입력받으면 a,b각각 b,a를 추가해줘야함
    let [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

//이 과정까지가 이차원 배열에 값을 넣는 과정
graph.forEach((element) => {
    element.sort((a, b) => a - b);
});

//visited배열로 노드를 탐색했는지 안했는지 구별하고 DFS / BFS 탐색
let visited = new Array(n + 1).fill(0);
let answer_dfs = [];

//DFS
function DFS(v) {
    //방문했다면 종료
    if (visited[v]) return;
    //방문 안했다면 기록하고 탐색을 시작한다
    visited[v] = 1;
    answer_dfs.push(v);
    for (let i = 0; i < graph[v].length; i++) {
        //그 다음에 갈 노드의 인덱스 저장
        let next = graph[v][i];
        //방문하지 않은 노드라면 재귀 방식으로 다음 노드를 방문한다.
        if (visited[next] === 0) {
            DFS(next);
        }
    }
}
DFS(v);
console.log(answer_dfs.join(' '));

//BFS
//방문하고자하는 인덱스가 실제 큐에 있는지 확인하고
//없을 때만 방문하면 됨
let answer_bfs = [];
visited.fill(0);
function BFS(v) {
    //시작 노드부터 방문하고 큐에 저장한다.
    let queue = [v];
    //큐가 비어있지 않으면
    while (queue.length) {
        //큐에 있는 값을 꺼내서
        let x = queue.shift();
        //이미 방문한 값이면 넘어간다
        if (visited[x] === 1) {
            continue;
        }
        //아니면은 탐색 여부를 기록 후
        visited[x] = 1;
        //답안에 저장한다
        answer_bfs.push(x);
        //그 다음으로 방문가능한 곳을 찾고 가능한 곳을 큐에 추가한다.
        for (let i = 0; i < graph[x].length; i++) {
            let next = graph[x][i];
            if (visited[next] === 0) {
                queue.push(next);
            }
        }
    }
}
BFS(v);
console.log(answer_bfs.join(' '));