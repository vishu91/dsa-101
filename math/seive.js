

function seiveAlgo(n){
    let isPrime = new Array(100).fill(true);
    for(let i = 2; i * i < n ; i++){
        if(isPrime[i]){
            for(let j = i*2; j <= n; j=j+i){
                isPrime[j] = false;
            }
        }
    }

    for(let j = 2; j < n;j++){
        if(isPrime[j])
            console.log(j);
    }   
    // console.log(isPrime);
}

seiveAlgo(100);