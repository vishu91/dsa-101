

function min_max_in_subarray_size_k(arr, k){
    let allsubarr = [];
    let allmin = [];
    let allmax = [];
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let temparr = [];
        for(let j = i; j < i+k && j < len ; j++){
            temparr.push(arr[j]);
        }
        if(temparr.length == k){
            allmin.push(Math.min(...temparr));
            allmax.push(Math.max(...temparr));
            allsubarr.push(temparr);
        }
    }
    console.log('original arr', arr);
    console.log('All subarr', allsubarr);
    console.log('All min', allmin);
    console.log('All max', allmax);
}


let arr = [1,2,3,1,4,5,2,3,6]; 
let k = 3;

min_max_in_subarray_size_k(arr, k);
