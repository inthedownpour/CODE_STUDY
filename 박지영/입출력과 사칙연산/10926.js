const fs = require('fs');
let input =  fs.readFileSync('/dev/stdin').toString().trim();
//trim()
//문자열 양 끝의 공백을 제거한다.
//공백이란 모든 공백문자(space, tab, NBSP 등), 모든 개행문자(LF, CR 등)

//한쪽 끝의 공백만 제거한 문자열을 반환하려면 trimStart(), trimEnd()

console.log(`${input}??!`)
//위와 같이 쓰면 문자열 사이에서 변수만 따로 구분 가능
//백틱내에서 줄바꿈 시 알아서 줄바꿈 출력