const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

const iter = inputs.length;

let ans = [];

for(let i = 0; i < iter; i++){
    //input[i]값이 공백으로 들어오는 경우엔 처리하지 않아야 정답이 나온다
    let input = inputs[i].split("");

    if(input.length === 0) continue;

    // 배열의 각 원소는 소문자, 대문자, 숫자, 공백의 개수를 의미함.
    let strArr = [0,0,0,0];

    for(let str of input){
        let ascii = str.charCodeAt();
        //a~z
        if(ascii >= 65 && ascii <= 90){
            strArr[1]++;
        //A~Z
        } else if(ascii >= 97 && ascii <= 122){
            strArr[0]++;
        //0~9
        } else if(ascii >= 48 && ascii <= 57){
            strArr[2]++;
        } else if(ascii === 32) {
            strArr[3]++;
        }
    }

    ans.push(strArr.join(" "));
}

console.log(ans.join("\n"));