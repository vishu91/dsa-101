

function sumofdigit(n) {
    if(n == 0) {
        return 0;
    }

    return n%10 + sumofdigit(parseInt(n/10));
}

let ans = sumofdigit(123);
console.log(ans);