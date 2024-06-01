

function checkBalanceP(str){
    let stack = [];
    let len = str.length;
    let openlist = '({[';
    for(let i = 0; i < len ; i++){
        if(openlist.indexOf(str[i]) !== -1){
            stack.push(str[i]);
        }else{
            let poped = stack[stack.length-1];
            if(str[i] == ')' && poped == '('){
                stack.pop();
            }else if(str[i] == ']' && poped == '['){
                stack.pop();
            } else if(str[i] == '}' && poped == '{'){
                stack.pop();
            }
        }
        console.log('stack', stack);
    }
    if(stack.length == 0){
        return true
    }else {
        return false;
    }
}


let str = '([]){{';
console.log(checkBalanceP(str));