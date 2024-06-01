


function compoundEffi(x , n){
    if(n == 0)
        return 1;
    let temp = compoundEffi(x, parseInt(n/2));
    temp = temp * temp;
    if(n % 2 == 0){
        return temp;
    }else{
        return temp * x;
    }
}

let res = compoundEffi(3,5);
console.log(res)