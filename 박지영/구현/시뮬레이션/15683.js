// https://velog.io/@seungrok-yoon/BOJ-15683-%EA%B0%90%EC%8B%9C
let [[n, m], ...graph] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e) => e.split(' ').map(Number));

let answer = 0;
const solution = (n, m, graph) => {
    const cameras = []; // 카메라 위치와 카메라 종류를 담음
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === 0) answer++;
            if (graph[i][j] !== 0 && graph[i][j] !== 6) cameras.push([i, j, graph[i][j]]);
        }
    }
    // depth, cameras, graph
    recursion(0, cameras, graph);
}

// depth = cameras의 index 역할
const recursion = (depth, cameras, graph) => {
    // recursion ends = 마지막 카메라를 바라본 이후
    // depth가 cameras의 범위를 넘어가게 되는 시점
    if (depth === cameras.length) {
        let tempAnswer = 0;
        // 사각지대 계산
        graph.forEach((row, i) => {
            //console.log('row i', row, i);
            row.forEach((_, j) => {
                tempAnswer += graph[i][j] === 0 ? 1 : 0
            })
        });
        answer = Math.min(answer, tempAnswer);
        return;
    }

    const [cRow, cCol, cameraNum] = cameras[depth];
    const originalGraph = deepCopyGraph(graph);
    // 카메라 번호에 따라 가능한 모든한 경우를 탐색 = 완전탐색(재귀)
    switch (cameraNum) {
        case 1:
            //4군데를 recursion
            fillGraph(cRow, cCol, graph, 1)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 2)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 3)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 4)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            break;

        case 2:
            //2각도 recursion
            fillGraph(cRow, cCol, graph, 1, 3)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 2, 4)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            break;
        case 3:
            //4각도 recursion
            fillGraph(cRow, cCol, graph, 1, 2)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 2, 3)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 3, 4)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 4, 1)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            break;
        case 4:
            //4각도 recurse
            fillGraph(cRow, cCol, graph, 1, 2, 3)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 2, 3, 4)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 3, 4, 1)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            fillGraph(cRow, cCol, graph, 4, 1, 2)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
            break;
        default:
            //5인 경우
            fillGraph(cRow, cCol, graph, 1, 2, 3, 4)
            recursion(depth + 1, cameras, graph)
            graph = deepCopyGraph(originalGraph)
    }
}

const fillGraph = (cRow, cCol, graph, ...directions) => {
    const angles = { 1: [-1, 0], 2: [0, 1], 3: [1, 0], 4: [0, -1] };
    for (const direction of directions) {
        let row = cRow;
        let col = cCol;
        const [dx, dy] = angles[direction];
        let isStop = false;
        while (!isStop) {
            let nextRow = row + dx;
            let nextCol = col + dy;
            if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m) {
                if (graph[nextRow][nextCol] === 6) {
                    isStop = true;
                    break;
                }
                if (graph[nextRow][nextCol] === 0) {
                    graph[nextRow][nextCol] = '#';
                }
                row = nextRow;
                col = nextCol;
                continue;
            }
            isStop = true;
        }
    }
}

// 하위 재귀함수가 끝났다면, 이전 상태로 그래프 되돌리기
// 자바스크립트에서 배열 객체는 참조형이기 때문에, graph = origianlGraph처럼 코드를 짰다면
// originalGraph의 값이 아닌, 주소값만 받아와 graph가 오염되었을 것이다.
const deepCopyGraph = (graph) => {
    const newGraph = [];
    graph.forEach((row)=>{
        newGraph.push([...row]);
    })
    return newGraph;
}

solution(n, m, graph);
console.log(answer);