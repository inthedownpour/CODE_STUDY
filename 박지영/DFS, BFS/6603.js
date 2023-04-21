let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// k개의 정수 중 6개의 정수를 뽑는 조합
const getCombination = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
        return arr.map((e) => [e]);
    }
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

for (let i = 0; i < input.length - 1; i++) {
    const [k, ...arr] = input[i].split(' ').map(Number);
    getCombination(arr, 6).forEach((numList) =>
        console.log(numList.join(' ')));
    console.log('');
}

// 뒤부터 제거
// input.pop();
// input = input.map((e) => e.split(' ').map(Number));

// let answer = '';
// let k;
// let s;

// input.forEach((e) => {
//     [k, ...s] = e;
//     dfs(0, []);
//     answer += '\n';
// });

// const dfs = (L, pick) => {
//     if (pick.length === 6) {
//         answer += `${pick.join(' ')}\n`
//         return;
//     }
//     for (let i = L; i < k; i++) {
//         // spread operator를 사용해서 기존의 pick배열에 선택한 원소를 추가해 다음 재귀로 전달
//         dfs(i + 1, [...pick, s[i]])
//     }
// }