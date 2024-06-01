


function bubbleSort(arr){
    let len = arr.length;

    for(let i = 0; i < len; i++){
        let flag = false;
        for(let j = 0; j < len-i-1; j++){
            if(arr[j] > arr[j+1]){
                flag = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(!flag){
            console.log('array is sorted');
            break;
        }
    }
    return arr;
}

// let arr = [3,2,1,5];
let arr = [2,4,5];
console.log(bubbleSort(arr));