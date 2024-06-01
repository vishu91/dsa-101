
function largefromright(arr){
    let ans = [-1];
    let len = arr.length;
    let stack = [];
    for(let i = 0; i < len; i++){
        while(stack.length == 0 && stack[stack.length - 1] <= arr[i]){
            stack.pop();
        }
        let nextele = stack.length != 0 ? -1: stack[stack.length -1];
        ans.push(nextele);
        stack.push(arr[i]);
    }

    return ans.reverse();
}

let arr = [5, 15, 10, 8, 6, 12, 9, 18];
// ans = [15, 18, 12, 12, 12, 18, 18, -1];

console.log(largefromright(arr));