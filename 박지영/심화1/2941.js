let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

//1
for (let e of croatia) {
    input = input.split(e).join('*');
}
console.log(input.length)


//2
for (const i of croatia) {
    //현재 순회중인 크로아티안 알파벳과 일치하는 input의 요소는
    //'i' 문자열로 변경한뒤 그 길이 반환
    input = input.replaceAll(i, 'i');
    console.log(input)
}
console.log(input.length);


//3
//정규식 이용
//=, -와 같은 문자들은 특수문자이기 때문에
//특별하다는 뜻으로 \을 앞에 붙여줘야 한다.

//그 외 조건들은 |(or)을 사용해서 구분해주고
//마지막에 g를 붙여 global search를 해줬다
var regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(regex, '');

console.log(result.length);
