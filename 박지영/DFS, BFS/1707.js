//이분 그래프
//https://velog.io/@ywc8851 참고
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = +input.shift();
let index = 0;

while (testCase--) {
    //index로 접근하지 않고 input.shift()로 접근을 했을 때는 시간초과가 발생
    const [v, e] = input[index++].split(' ').map(Number);
    const graph = Array.from({ length: v + 1 }, () => []);
    const visited = Array.from({ length: v + 1 }, () => 0);

    for (let i = 0; i < e; i++) {
        const [from, to] = input[index + i].split(' ').map(Number);
        graph[from].push(to);
        graph[to].push(from);
    }

    const bfs = (start) => {
        let queue = [start];
        let check = 1;

        visited[start] = check;

        while (queue.length) {
            //visited 배열을 통해 현재 색깔이 칠해져있는지 (1, 2)
            //아니면 색이 안칠해져 있는지(0) 판단
            //BFS 탐색을 하며 queue에서 방금 뽑은 색깔과 반대색으로 현재 꼭짓점을 칠함
            let cur = queue.shift();

            if (visited[cur] === 1) check = 2;
            else if (visited[cur] === 2) check = 1;

            for (let i = 0; i < graph[cur].length; i++) {
                let next = graph[cur][i];
                if (!visited[next]) {
                    visited[next] = check;
                    queue.push(next);
                } else if (visited[cur] === visited[next]) {
                    return;
                }
            }
        }
    };

    for (let i = 1; i <= v; i++) {
        if (!visited[i]) {
            bfs(i);
        }
    }

    //하나의 edge라도 두 꼭짓점이 같은 색깔인 경우 이분그래프가 아니다
    const isAns = () => {
        for (let i = 1; i <= v; i++) {
            for (let j = 0; j < graph[i].length; j++) {
                let next = graph[i][j];
                if (visited[i] === visited[next]) {
                    return console.log('NO');
                }
            }
        }
        return console.log('YES');
    };
    isAns();
    index += e;
}