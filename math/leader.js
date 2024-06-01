// Bruat force
// function leader(arr) {
//   let len = arr.length;
//   let res = [];
//   for (let i = 0;i < len; i++) {
//     let flag = true;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] < arr[j]) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       res.push(arr[i]);
//     }
//   }
//   console.log(res);
// }

// Optimize

function leader(arr){
    let len = arr.length;
    let max_from_right = arr[len - 1];
    let res = [arr[len-1]];
    for(let i = len-2; i >= 0; i--){
        if(arr[i] > max_from_right){
            max_from_right = arr[i];
            res.unshift(arr[i]);
        }
    }
    console.log(res);
}

// DRY

let arr = [7, 10, 4, 3, 6, 5, 2];
leader(arr);
