

function primeFactor(n){
    let ans = [];
    let primeList = [];
    for(let i = 2; i <= n;){
        if(!isPrime(i)){
            primeList.push(i);
            i++;
            continue;
        }
        // console.log(i)
        if(n % i == 0){
            n = parseInt(n / i);
            ans.push(i);
        }else{
            i++;
        }
    }
    console.log("prime factor", ans);
}

function isPrime(n){
    if(n == 1)
        return false;
    for(let i = 2; i *i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}


primeFactor(15);