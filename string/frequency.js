


function frequency(str){
    let arr =  new Array(26).fill(0);
    console.log(arr);
    let acode = 'a'.charCodeAt();
    console.log('a'.charCodeAt());
    for(let i = 0; i < str.length; i++){
        let ind = str[i].charCodeAt() - acode;
        arr[ind]++ ;
    }

    console.log(str);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            console.log(String.fromCharCode(i + acode), arr[i]);
        }
    }
}


let str = 'geekforgeeks';

console.log(frequency(str));