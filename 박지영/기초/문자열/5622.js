let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let alphabets = {
    'ABC' : 3,
    'DEF' : 4,
    'GHI' : 5,
    'JKL' : 6,
    'MNO' : 7,
    'PQRS' : 8,
    'TUV' : 9,
    'WXYZ' : 10,
}

let result = 0;

for (let i = 0; i < input.length; i++) { //for문으로 input 순회
    for (let x in alphabets) { //for in문으로 해당 input의 각각의 알파벳이 객체의 key값에 포함되어있는지 확인
        if(x.includes(input[i])) { //includes : 배열에 특정 값이나 문자가 포함되어있는지 확인
            result += alphabets[x]
        }
    }
}
console.log(result)