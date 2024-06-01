


function quickSort(arr, l, h){
    if(l < h){
        let pindex = partation(arr, l, h);
        quickSort(arr, l, pindex-1);
        quickSort(arr, pindex+1, h);
    }
    return arr;
}

function partation(arr, l, h){
    let pivot = arr[h];
    let i = l -1;
    for(let j = l; j <= h -1; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, h);
    return i+1;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [10, 80, 30, 90, 40, 50, 70];

let len = arr.length;
console.log('org arr', arr);
console.log(quickSort(arr, 0, len-1));