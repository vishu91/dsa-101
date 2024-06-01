

// function maxSubArraySum(arr){
//     let res = 0;
//     let len = arr.length;
//     for(let i = 0; i < len; i++){
//         let currSum = 0;
//         for(let j = i; j < len; j++){
//             currSum += arr[j];
//             if(currSum > res){
//                 res = currSum;
//             }
//         }
//     }
//     console.log('total sum', res);
// }

function maxSubArraySum(arr){
    let res = 0;
    let len = arr.length;
    let sumTillnow = 0;
    let startIdx, endIdx;
    for(let i = 0; i < len; i++){
        sumTillnow += arr[i];
        if(sumTillnow > res){
            res = sumTillnow;
            endIdx = i;
        }
        if(sumTillnow <= 0){
            sumTillnow = 0;
            startIdx = i + 1;
        }
    }
    console.log('arr', arr);
    console.log('total sum', res);
    console.log('subarry index', startIdx, endIdx);
    for(let i = startIdx; i <= endIdx; i++){
        console.log(arr[i])
    }
}

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
maxSubArraySum(arr);