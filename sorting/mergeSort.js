function mergeSort(arr) {
  let len = arr.length;
  if (len > 1) {
    let half = Math.ceil(len / 2);
    let leftArr = arr.slice(0, half);
    let rightArr = arr.slice(half, len);

    // // Recursively divide and print left and right arrays
    // console.log('left:', leftArr);
    // console.log('right:', rightArr);
    // console.log('---'); // Separator for better visualization

    //recursing to divide
    mergeSort(leftArr);
    mergeSort(rightArr);

    console.log('----after recursion--------');
    // Recursively divide and print left and right arrays
    console.log("leftarr:", leftArr);
    console.log("rightarr:", rightArr);
    console.log("---"); // Separator for better visualization

    // merge sort
    let i = 0,
      j = 0,
      k = 0;
    let leftLen = leftArr.length;
    let rightLen = rightArr.length;
    while (i < leftLen && j < rightLen) {
      if (leftArr[i] < rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while(i < leftLen){
        arr[k] = leftArr[i];
        i++; k++;
    }

    while(j < rightLen){
        arr[k] = rightArr[j];
        j++, k++;
    }
    console.log('----after merge--------');

    console.log("leftarr:", leftArr);
    console.log("rightarr:", rightArr);
    console.log("---"); // Separator for better visualization 
  }
  return arr;
}

let arr = [2, 6, 5, 1, 7, 4, 3];

console.log(mergeSort(arr));
