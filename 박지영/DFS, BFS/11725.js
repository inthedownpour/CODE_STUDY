let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input.shift();
const tree = Array.from({ length: n + 1 }, () => []);

// 무방향 트리이므로 A->B, B->A 정보를 모두 넣어준다
for (let [from, to] of input.map((e) => e.split(" ").map(Number))) {
    tree[from].push(to);
    tree[to].push(from);
  }

// 노드 방문 처리
let check = new Array(n + 1).fill(0);
// bfs 이용
const queue = [];
// 부모 노드 저장
check[1] = 1;

for (let next of tree[1]) {
    // 1이 시작이고 child 노드를 넣고
    // check[child]엔 부모노드의 값을 넣어준다
    check[next] = 1;
    queue.push(next);
}

while (queue.length) {
    const cur = queue.shift();
    for (let next of tree[cur]) {
        if (!check[next]) {
            check[next] = cur; //부모 노드의 값을 넣어준다.
            queue.push(next);
        }
    }
}

console.log(check.slice(2).join('\n'));