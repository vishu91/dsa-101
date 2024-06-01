// previous grater ele

function findPreviousLarge(arr){
    let stack = [];
    let ans = [-1];
    stack.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        while(stack.length != 0 && stack[stack.length - 1] <= arr[i]){
            stack.pop();
        }
        let ansval = (stack.length == 0 ? -1: stack[stack.length -1]);
        ans.push(ansval);
        stack.push(arr[i-1]);
    }
    return ans;
}

let arr = [15, 10, 18, 12, 4, 6, 2, 8];
//op ans = [-1, 15, -1, 18, 12, 12, 6, 12];

console.log(findPreviousLarge(arr));