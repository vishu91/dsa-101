

function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length;
    // let mid = (left + right) /2;
    while(left <= right){
        mid = Math.ceil((left + right) /2);
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    console.log('result not found');
}


arr = [2,4,5,6,7,13,15];
let res = binarySearch(arr, 15);
console.log('res ', res);