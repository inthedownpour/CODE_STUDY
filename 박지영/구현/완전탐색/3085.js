// 가능한 모든 교환 후 최대길이 갱신
// 행을 기준으로 오른쪽으로 탐색하면서 오른쪽 색상과 현재 색상을 바꿔주고 탐색하고 다시 돌려주기
// 열을 기준으로 아래쪽으로 탐색하면서 아래쪽 색상과 현재 색상을 바꿔주고 탐색하고 다시 돌려주기
// 행을 기준으로 왼쪽과 색을 변경해 줄 필요 없고 열을 기준으로 위쪽과 색을 변경해줄 필요 없다.
// 오른쪽 아래쪽을 바꿔가면서 변경했기 때문에 이미 바꿔줬던 색상이기 때문이다.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0]
let candy = input.splice(1).map(v => v.split(''))
let max = 1;

function swap(x1, y1, x2, y2) {
    let temp = candy[x1][y1];
    candy[x1][y1] = candy[x2][y2];
    candy[x2][y2] = temp;
}

function search() {
    // 행에서 긴 수열 탐색
    for (let i = 0; i < N; i++) {
        let count = 1;

        for (let j = 0; j < N - 1; j++) {
            if (candy[i][j] == candy[i][j + 1]) {
                count++;
                max = Math.max(count, max);
            } else {
                count = 1;
            }
        }
    }

    // 열에서 긴 수열 탐색
    for (let i = 0; i < N; i++) {
        let count = 1;

        for (let j = 0; j < N - 1; j++) {
            if (candy[j][i] == candy[j + 1][i]) {
                count++;
                max = Math.max(count, max);
            } else {
                count = 1;
            }
        }
    }
}

function solution() {
    // 행을 기준으로 오른쪽 색과 변경
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N - 1; j++) {
            swap(i, j, i, j + 1);
            search();
            swap(i, j + 1, i, j);
        }
    }

    // 열을 기준으로 아래쪽 색과 변경
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N; j++) {
            swap(i, j, i + 1, j);
            search();
            swap(i + 1, j, i, j);
        }
    }
    console.log(max);
}

solution();