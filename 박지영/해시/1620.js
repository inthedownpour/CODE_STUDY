let [nm, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);

const numToName = new Map();
const nameToNum = new Map();

for (let i = 0; i < n; i++) {
    // set(key, val) : key, val순으로 저장
    numToName.set(i + 1, input[i]); // 1 => 'Bulbasqur' , 2 => 'Ivysaur', ... 26 => 'Raichu'
    nameToNum.set(input[i], i + 1); // 'Bulbasaur' => 1, 'Ivysaur' => 2, ... 'Raichu' => 26
}

const quiz = input.slice(n, input.length);
let answer = '';

quiz.forEach(v => {
    if (isNaN(v)) { //만약 quiz 요소가 숫자가 아니면?
        //get(val) : val 값을 얻을 수 있다
        answer += nameToNum.get(v) + '\n'; // Ex) NametoNum.get(v='Raichu') => 26 출력
    } else {
        answer += numToName.get(+v) + '\n'; // Ex) NumtoName.get(v=>25) => Pikachu 출력
    }
});
console.log(answer.trim());