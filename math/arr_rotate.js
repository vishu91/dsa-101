


function rotateArr(arr, d){
    let len = arr.length;
    let temp = [];// arr[0];
    for(let i = 0; i < d; i++){
        temp[i] = arr[i];
    }
    for(let i = d; i < len; i++){
        arr[i-d] = arr[i];
    }
    console.log(arr);
    for(let i = 0; i < d; i++){
        arr[len - d + i] = temp[i];
    }
    // arr[len -1] = temp;
    console.log(arr);
}

let arr = [1,2,3,4,5,6];
rotateArr(arr, 3);