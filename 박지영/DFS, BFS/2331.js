let [a, p] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let arr = [a];

while (true) {
    const curNum = String(arr[arr.length-1]);
    //수열의 현재 항인 curNum으로 다음 항인 nextNum을 구하고
    const nextNum = curNum.split('').reduce((acc, v)=> acc + Number(v)**p, 0);
    //이 nextNum이 이미 수열 내에 한 번이라도 등장했다면
    if (arr.includes(nextNum)) {
        //그 즉시 해당 수가 등장하기 전까지의 항의 개수를 출력
        console.log(arr.indexOf(nextNum));
        break;
    }
    //아니라면 수열에 nextNum을 추가
    arr.push(nextNum);
}