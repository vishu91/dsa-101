

// Always take the last element
function lpartation(arr, l, h){
    let pivot = arr[h];
    let i = l -1;
    for(let j = l; j <= h-1; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr, i , j);
        }
    }

    swap(arr, i + 1, h);
    return arr;
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
console.log(lpartation(arr, 0, len-1));