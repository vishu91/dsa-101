

function rodCutting(n, a, b, c){
    if(n == 0)
        return 0;
    if(n < 0)
        return -1;
    return Math.max(1 + rodCutting(n-a, a, b, c), 1 + rodCutting(n-b, a, b, c), 1 + rodCutting(n-c, a, b, c));
    // return 1 + rodCutting(n-a, a, b, c);


}



let num = 7;
// let a = 2, b = 5, c = 1;
let a = 4, b = 2, c = 6;

console.log(rodCutting(num, a, b, c));