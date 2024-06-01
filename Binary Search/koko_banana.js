

var minEatingSpeed = function(piles, h) {
    
    let min = 0, max = Math.max(...piles);
    let len = piles.length;
    for(let i = 0; i < len; i++){
        min += piles[i];
    }
    min = Math.floor(min / h);
    res = 0;
    console.log('arr ', piles);
    for(let i = min; i <= max; i++){
        let totalHourTakenToEatBananaPerihour = 0;
        console.log('FOr i:', i);
        for(let j = 0; j < len;j++){
            let hours = Math.ceil(piles[j]/i);
            totalHourTakenToEatBananaPerihour += hours;
            console.log(hours);
        }
        console.log('tot ohour', totalHourTakenToEatBananaPerihour);
        if(totalHourTakenToEatBananaPerihour == h){
            res = i;
            break;
        }
    }
    console.log('coco banan perhour', res);
};


// let piles = [30,11,23,4,20], h = 5
let piles = [312884470], h = 312884469
minEatingSpeed(piles, h);
