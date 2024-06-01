


function longestString(str){
    let count = 1;
    let resCount = 0;
    let stringVal = '';
    for(let i = 1; i < str.length; i++){
        if(str[i] == str[i-1]){
            count++;
        }else{
            if(resCount < count){
                stringVal = str[i-1];
                resCount = count;
            }
            count = 1;
        }
    }
    resCount = Math.max(resCount, count);
    console.log('string cnt', resCount);
    console.log('string val', stringVal)
}


// let s = 'abb';
// let s = 'aabbbbbddd';
// let s = 'aabb';
let s = 'ab';
// let s = 'assssssabbbbbddd';

longestString(s);