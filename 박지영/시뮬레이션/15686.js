let [nm, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = nm.split(' ').map(Number);
const city = input.map((v) => v.split(' ').map(Number));

// 1. 폐업시키지 않을 치킨집을 m개 고르기
// 2. 폐업시키지 않을 치킨집을 다 골랐을 때의 도시의 치킨 거리를 구하기

// 거리의 총 합이 최소가 되려면 당연히 각 거리가 최소여야 한다
// 이를 구하려면 모든 2인 좌표 중에서 백트래킹으로 m개 만큼 고른 2인 좌표를 모두 탐색해서
// 이 중에서 최솟값을 구해야 할 것이다

const house = [];
const chicken = [];
// 좌표를 돌면서 집과 치킨집의 좌표를 각각 배열에 저장한다
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (city[i][j] === 1) {
            house.push([i, j]);
        } else if (city[i][j] === 2) {
            chicken.push([i, j]);
        }
    }
}

const getMinDistance = () => {
    let sum = 0;
    // 집들을 순회하며
    house.forEach(([hx, hy]) => {
        let min = Infinity;
        chicken.forEach((_, index) => {
            // 가장 가까운 치킨집(check가 true인)과의 거리를 누적하여 합을 리턴
            if (check[index] === true) {
                const [cx, cy] = chicken[index];
                min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
        });
        sum += min;
    });
    return sum;
};

const check = new Array(chicken.length).fill(false);
let answer = Infinity;

// DFS 탐색을 통해 치킨집의 조합을 구한다.
// 선택된 치킨집은 check 배열을 true로
// 선택되지 않은 치킨집은 false로 저장한다
const DFS = (idx, cnt) => {
    // 고른 치킨집 (cnt)가 m이 되었을 때 거리계산을 시작한다
    if (cnt === m) {
        answer = Math.min(answer, getMinDistance());
        return;
    } else {
        for (let i = idx; i < chicken.length; i++) {
            if (check[i] === true) continue;
            check[i] = true;
            DFS(i, cnt + 1);
            check[i] = false;
        }
    }
};

DFS(0, 0);
console.log(answer);