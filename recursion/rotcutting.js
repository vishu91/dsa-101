

function rodCutting(n, a, b, c){
    if(n == 0)
        return 0;
    if(n < 0)
        return -1;
    // return Math.max(1 + rodCutting(n-a, a, b, c), 1 + rodCutting(n-b, a, b, c), 1 + rodCutting(n-c, a, b, c)); // thi is wrong it will fail if all a.b.c are equal
    let res = Math.max(rodCutting(n-a, a, b, c), rodCutting(n-b, a, b, c), rodCutting(n-c, a, b, c)); // thi is wrong it will fail if all a.b.c are equal
    // return 1 + rodCutting(n-a, a, b, c);
    if(res == -1) {
        return -1;
    }
    return res + 1;

}



// let num = 9;
let num = 5;
let a = 2, b = 5, c = 1;
// let a = 2, b = 2, c = 2;

console.log(rodCutting(num, a, b, c));