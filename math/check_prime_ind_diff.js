var maximumPrimeDifference = function(nums) {
    let len = nums.length;
    // let n = nums.sort((a,b) => a - b);
    // console.log(n);
    let primeIndex = [];
    for(let i = 0; i < len; i++){
        let isPrime = checkIfPrime(nums[i]);
        if(isPrime)
            primeIndex.push(i);
    }
    console.log(primeIndex);
    primeIndex = primeIndex.sort((a,b) => a - b);
    let diff = primeIndex[primeIndex.length -1] - primeIndex[0];
    console.log('len', diff);
    
};

function checkIfPrime(n){
    for(let i =2; i * i <= n; i++){
        if(n % i == 0)
            return false;
    }
    return true;
}


// let  nums = [4,2,9,5,3];
let nums = [4,8,2,8]
console.log(maximumPrimeDifference(nums))