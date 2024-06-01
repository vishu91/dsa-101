

function devisorFun(n){
    let res = [];
    for(let i = 2; i * i < n; i++){
        if(n % i == 0){
            let temp = n / i;
            res.push(i);
            res.push(temp);
        }
    }
    console.log('no of div', res.length, res);
}


devisorFun(99);
devisorFun(101);
devisorFun(182);
devisorFun(176);