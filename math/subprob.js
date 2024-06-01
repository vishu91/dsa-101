

function subProb(a, b){
    let dis = a.charCodeAt(0);
    let dis1 = b.charCodeAt(0);
    let diff = Number(a) - Number(b);
    console.log(diff);
    console.log(dis);
    console.log(dis1);
}

// subProb('a', 't');
function changeChar(a, k){
//    let code =  a.charCodeAt(0);
   let dis1 = a.charCodeAt(0) - 'a'.charCodeAt(0);
   let dis2 = 'z'.charCodeAt(0) - a.charCodeAt(0) +1;
    dis = Math.min(dis1, dis2);
   console.log('dis1', dis1);
   console.log('dis2', dis2);
   let forward = true;
   if(k >= dis){
    a = 'a';
    k = k - dis;
    forward = true;
   }else{
    if(k > 0){
        if(a.charCodeAt(0) - k >= 'a'.charCodeAt(0)){
            a = String.fromCharCode(a.charCodeAt(0) - k);
        }else{
            a = String.fromCharCode('z'.charCodeAt(0) - k -1)
        }
    }
    forward = false;
   }
   console.log(k);
   console.log(a);
   console.log('forwad', forward);
}

// subProb('a', 't');
changeChar('y', 5);