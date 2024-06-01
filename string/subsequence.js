

function subsequence(str, pat){
    let strlen = str.length;
    let patlen = pat.length;
    let j = 0;
    for(let i =0; i < strlen && j < patlen; i++){
        if(str[i] == pat[j])
            j++
    }
    if(j == patlen){
        console.log("Subsequence available");
        return j == patlen;
    }
}

let str = 'abcd';
let pat = 'ad';

console.log(subsequence(str, pat));
