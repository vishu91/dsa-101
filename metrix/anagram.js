

function anagrams(n, strlist){
    // code here
    let map = {};
    for(let i = 0; i < n; i++){
        let str = strlist[i];
        str = str.split('').sort().join('');
        if(!map[str]){
            map[str] = [strlist[i]];    
        }else{
            let arr = map[str];
            arr.push(strlist[i]);
            map[str] = arr;
        }
    }

    let sortedMap = Object.entries(map).sort((a, b) => a[1].join('').localeCompare(b[1].join('')));

    // Reconstructing the sorted object
    let res = [];
    for (let [key, value] of sortedMap) {
        res.push(value);
    }
    return res;
}

// let strlist = ['act', 'god', 'cat', 'dog', 'tac'];
let strlist = ['kptkwp', 'czdvgr', 'osbqrs', 'shhqjd', 'ydavzo', 'bltcjf', 'vuoswt', 'gkgbjk', 'hzfoyu', 'tujlak', 'wgmuab', 'wtdeno', 'cemizj', 'dryfqd', 'hxuzdd', 'zpanxz', 'lnakfa', 'yovytp', 'yqtjyd', 'baoyal', 'vbwgaf', 'bmmdgq', 'akmnxe', 'koaaan', 'jlarwn', 'dbhapu', 'bspgln'];

console.log(anagrams(strlist.length, strlist));