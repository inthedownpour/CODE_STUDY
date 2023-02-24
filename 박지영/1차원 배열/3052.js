let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [];

input.forEach((i)=>{
   arr.push(i % 42);
})
//배열의 중복을 제거해줌
//Set 객체를 생성할 때 배열을 넣어주면 중복이 사라짐
//Set 객체를 이용했기 때문에 다시 배열의 형태로 바꿔줌

//두 번째 방법은 filter
//const result = arr1.filter((v, i) => arr1.indexOf(v) === i);
const result = [...new Set(arr)];

console.log(result.length);