

function anagram(str, str1){
    let arr = new Array(26).fill(0);
    let acode = 'a'.charCodeAt();
    for(let i = 0; i < str.length; i++){
        let ind = str[i].charCodeAt() - acode;
        arr[ind]++;
    }
    for(let i = 0; i < str1.length; i++){
        let ind = str1[i].charCodeAt() - acode;
        arr[ind]--;
    }
    for(let val of arr){
        if(val != 0)
            return 'No a anagram';
    }
    return 'string is anagram';
    console.log(arr);
}


let str = 'geek';
let str1 = 'keeg';

console.log(anagram(str, str1));