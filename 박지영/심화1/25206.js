let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;
let sum = 0;

//배열 안 배열
//for문 쓸거면 웬만하면 배열로 만들자..^^
const scoreArr = [
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
];

for (let i = 0; i < input.length; i++) {
  let [lecture, score, alpabet] = input[i].split(" ");
  if (alpabet === "P") continue;
  //findIndex : 해당 조건을 만족하는 첫번째 요소의 인덱스 반환
  //조건 미충족 시 -1 반환
  //input된 알파벳에 해당하는 scoreArr의 인덱스 반환
  let idx = scoreArr.findIndex((v) => v[0] === alpabet.trim());
  let majorScore = Number(score) * scoreArr[idx][1];

  sum += majorScore;
  cnt += Number(score);
}

console.log(sum / cnt);