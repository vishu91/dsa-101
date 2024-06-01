


function snakeprint(arr){
    let collen = arr.length;
    let rowlen = arr[0].length;
    for(let i = 0; i < collen; i++){
        // let j = (i % 2 == 0 ? 0 : rowlen);
        if(i % 2 == 0){
            for(let j = 0; j < rowlen; j++){
                console.log(arr[i][j]);
            }
        }else{
            for(let j = rowlen; j > 0; j--){
                console.log(arr[i][j]);
            }
        }
    }
}


arr = [[1,2,3], [4,5,6],[7,8,9]];
console.log(arr);

snakeprint(arr);