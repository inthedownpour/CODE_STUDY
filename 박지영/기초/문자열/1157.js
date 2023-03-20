//반복되는 무언가를 뽑아내기 위해서는 배열보다 객체를 사용하자!!
let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let lowStr = input.toLowerCase(); //대소문자 구분 없게
let obj = {}; //key : value 형태로 값을 담기 위해 object 선언

for (let i = 0; i < lowStr.length; i++) {
    if (obj[lowStr[i]] === undefined) {
        obj[lowStr[i]] = 1; //key가 없을 땐 value를 1로 설정
    } else {
        obj[lowStr[i]] += 1; //key가 있으면 +1
    }
}

let result = '';
let count = 0;

for (const i in obj) { //obj 전체 요소를 확인하기 위해 for in 사용
    if (obj[i] > count) { //count와 value를 비교해서 value가 더 크면
        count = obj[i]; //count 값을 교체
        result = i.toUpperCase(); //결과 값도 대문자로 교체
    } else if(obj[i] === count) { //만약 count와 value가 값이 같으면
        result = '?'; //result를 ?로 교체
    }
}
console.log(result);