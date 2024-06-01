
function compoundPow(n, p){
    let ans = 1;
    for(let i = 1; i <= p ; i++){
        ans = ans * n;
    }
    console.log(ans);
}

compoundPow(3,4);