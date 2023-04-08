// 나이트는 항상 오른쪽으로 이동
// 지나온 곳은 다시 볼 필요가 없음 => 그리디
const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 세로가 1인 경우 이동이 불가능 함
if (n === 1) {
    console.log(1);
// 세로가 2인 경우 위, 아래로 한 칸씩 밖에 못 움직이므로 2, 3번 경우만 가능
// 가로가 아무리 길어도 4번 이상 움직이지 못한다
} else if (n === 2) {
    console.log(Math.min(4, Math.floor((m + 1) / 2)));
// 세로가 3 이상이고, 가로가 6 이하면 1~4번 방법을 모두 써야 하므로
// 최댓값은 4가 될 것이고, 최소값은 자신 가로의 길이가 될 것이다
} else if (m < 7) {
    console.log(Math.min(4, m));
// 세로가 3 이상이고, 가로가 7 이상이면 이동에 제약이 없음
// 오른쪽으로 두 칸을 가야만 하는 강제적인 방법 빼고는 한칸씩만 움직이면 되므로
// m - 2가 나온다
} else {
    console.log(m - 2);
}