

function strrev(str, n){
    if(n == 0)
        return str[0];

    return str[n] + strrev(str, n-1); 
    // return revstr + str[n];

}

function isPalindrom(str, start, end){
    if(start >= end)
        // return str[start] == str[end];
        return true;
    // if(str[start] != str[end])
    //     return false
    return (str[start] == str[end]) && isPalindrom(str, start+1, end-1);
    // return true;
}

// let st = 'abccba';
// let st = 'abccba';
let st = '12321';
console.log(isPalindrom(st, 0, st.length-1));


// let s = 'abc';
// console.log(strrev(s, s.length-1));