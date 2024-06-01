

function hoarepartation(arr, l, h){
    let pivot = arr[l];
    let i = l - 1, j = h - 1;
    
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// let arr = [5, 3, 8, 4, 2, 7, 1, 10];
// let arr = [3, 8, 6, 12, 10, 7];
let arr = [10, 80, 30, 90, 40, 50, 70];

let len = arr.length;
console.log('org arr', arr);
console.log(hoarepartation(arr, 0, len-1));