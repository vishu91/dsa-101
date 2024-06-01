var getSmallestString = function(s, k) {
    // s = s.split("");
    let n = s.length;
    let a = new Array(n).fill(0);
    acode = 'a'.charCodeAt(0);
    zcode = 'z'.charCodeAt(0);

    for(let i = 0; i < n; i++){
        dis1 = s.charCodeAt(i) - acode;
        dis2 = zcode - s.charCodeAt(i) +1;
        dis = Math.min(dis1, dis2);
        if(dis == 0){
            a[i] = 0;
        }else{
            a[i] = dis;
        }
        
    }

    for(let i =0; i< n;i++){
        if(k >= a[i]){
            s = s.replace(s[i], 'a');
            k = k - a[i];
        }else{
            if(k > 0){
                if(s.charCodeAt(i) - k >= acode){
                    // temp = String.fromCharCode(s.charCodeAt(i) - k).split('');
                    // console.log('temp', temp)
                    s = s.replace(s[i], 'w');
                }else{
                    
                    temp = String.fromCharCode(zcode - k -1)+'';
                    s.replace(s[i], temp[0]);
                }

                k = 0;
            }
            break;  
        }
    }
    console.log('str', s);
    return s;
};


getSmallestString("xaxcd", 4);