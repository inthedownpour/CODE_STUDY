//https://rookie-developer.tistory.com/m/217
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arr = Array.from({length: N}, (_, i) => i +1);
console.log(arr);

for (let j = 1; j <= M; j++) {
    let ijkNum = input[j].split(' ').map(Number);

    //배열의 인덱스는 0부터 시작하니까 -1씩 해준다
    let I = ijkNum[0]-1; //begin
    let J = ijkNum[1]-1; //end
    let K = ijkNum[2]-1; //mid
    console.log('i, j, k', I, J, K)

    //i부터 k-1까지 배열을 생성해준다
    let begin = [...arr].splice(I,(K-I));
    let midEnd = [...arr].splice(K,(J-K+1));
    arr.splice(I,(J-I+1))

    //concat() : 배열 합치기
    let x = midEnd.concat(begin).map((i) => parseInt(i));
    //x를 I에 붙인다
    arr.splice(I,0,x);
    //flat() :
    arr = arr.flat(1);
}

console.log(arr.join(" "));