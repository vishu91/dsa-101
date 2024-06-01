

function partation(arr, len){
    let pivot = arr[len-1];
    let temp = [];
    for(let i = 0; i < len; i++){
        if(arr[i] <= pivot){
            temp.push(arr[i]);
        }
    }

    for(let i = 0; i < len; i++){
        if(arr[i] > pivot){
            temp.push(arr[i]);
        }
    }
    return temp;


}


// let arr = [5, 3, 8, 4, 2, 7, 1, 10];
let arr = [3, 8, 6, 12, 10, 7];

let len = arr.length;
console.log('org arr', arr);
console.log(partation(arr, len));
