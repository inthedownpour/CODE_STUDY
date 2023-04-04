let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];

const tree = {};
for (let i = 1; i <= n; i++) {
    const [node, left, right] = input[i].split(' ');
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