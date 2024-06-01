



// function subsetSum(arr, sum, curr, i, len, cnt, target){
//     if(i == len){
//         console.log(sum);
//         console.log(curr);
//         if(target == sum){
//             return 1;
//         }
//         return 0;
//     }

//     return subsetSum(arr, sum, curr, i+1, len, cnt, target) + subsetSum(arr, sum+arr[i], curr+','+arr[i], i+1, len, cnt, target);
//     // console.log(arr)
//     // return cnt;
// }
// find frequenct of subset sum
function subsetSum(arr, sum, i, len, target){
    if(i == len){
        console.log(sum);
        if(target == sum){
            return 1;
        }
        return 0;
    }

    return subsetSum(arr, sum, i+1, len, target) + subsetSum(arr, sum+arr[i], i+1, len, target);
}


let arr = [1,2,3];
let len = arr.length;
console.log('target count', subsetSum(arr, 0, 0, len, 3));