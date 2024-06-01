

function wordReverse(str){
    str = str.split(' ');//.reverse().join(); //.reverse().join(' ');
    let rev = [];
    str.forEach(element => {
        rev.push(element.split('').reverse().join(''));
    });
    console.log(str);
    console.log(rev);
}


let name = 'bishwajit kumar';
console.log(wordReverse(name));