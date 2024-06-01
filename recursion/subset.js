



// function subset(str){
//     let len = str.length;
//     let subset = [];
//     for(let i = 0; i < len;i++){
//         let temp = '';
//         let temp1 = '';
//         for(let j = 0; j < i; j++){
//             if(j != i){
//                 temp = temp + str[j];
//             }
//             temp1 = temp1 + str[i] + str[j];
//         }
//         subset.push(temp1);
//         subset.push(temp);
//     }
//     return subset;
// }

function subset(str, curr, i, sub){
    if(i == str.length){
        console.log(curr);
        sub.push(curr);
        return;
    }
    subset(str, curr, i+1, sub);
    subset(str, curr+str[i], i+1, sub);
    return sub;
}

let str = "ABC";
// let subset 
console.log(subset(str, "", 0, []));