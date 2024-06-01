

function sumrec(n){
    if(n == 0)
        return 0;
    return n + sumrec(n - 1);
}

let num = 5;
console.log(sumrec(num));