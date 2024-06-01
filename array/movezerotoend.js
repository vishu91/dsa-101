// function moveZeroToEnd(arr) {
//   let len = arr.length;
//   console.log(len);
//   for (let i = 0; i < len; i++) {
//     if (arr[i] == 0) {
//       let j = i + 1;
//       while (j < len) {
//         if (arr[j] != 0) {
//             swap(arr, i, j);
//             break
//         }
//         j++;
//       }
//     }
//   }
//   console.log('Result', arr);
// }

function moveZeroToEnd(arr) {
  let len = arr.length;
  console.log(len);
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] != 0) {
      swap(arr, cnt, i);
      cnt++;
    }
  }
  console.log("Result", arr);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // return arr;
}

let arr = [2, 3, 0, 6, 43, 0, 43,0,21,0];

moveZeroToEnd(arr);
