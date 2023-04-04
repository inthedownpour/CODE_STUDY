// 이진 트리란 각각의 노드가 최대 두개의 자식 노드를 갖는 트리 자료 구조
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];

// 입력에서 루트가 번호가 아닌 알파벳이 주어지므로, 객체를 이용
const tree = {};
for (let i = 1; i <= n; i++) {
    const [node, left, right] = input[i].split(' ');
    //// tree의 키 값으로 노드를 저장하고, 값으로는 left, right가 담긴 배열을 저장
    tree[node] = [left, right];
}

let result = '';
function preorder(node) {
    if (node===".") return;
    const [left, right] = tree[node];
    result += node;
    preorder(left);
    preorder(right);
}

function inorder(node) {
    if (node===".") return;
    const [left, right] = tree[node];
    inorder(left);
    result += node;
    inorder(right);
}

function postorder(node) {
    if (node===".") return;
    const [left, right] = tree[node];
    postorder(left);
    postorder(right);
    result += node;
}

preorder('A');
result += "\n";
inorder('A');
result += "\n";
postorder('A');
console.log(result);