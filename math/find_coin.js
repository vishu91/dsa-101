
var findKthSmallest = function(coins, k) {
    let res = [];
    let len = coins.length;
    for(let i =0; i < len; i++){
        let x = coins[i]
        for(let j = 0; j < k+1; j++){
            res.push(x);
            x = x + coins[i];
        }
    }
    console.log(res);
    let r = res.sort((a,b) => a-b);
    r = [...new Set(r)];
    console.log(r);
    return r[k-1];
};


let coins = [3,6,9], k = 3;

console.log(findKthSmallest(coins, k))