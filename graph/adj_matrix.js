function createMatrix(rows, cols) {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
}

function createAdjMat(rows, cols){
    let matrix = createMatrix(rows, cols);
    for(let i = 0; i < rows; i++){
        let edge = input[i].split(' ');
        let u = parseInt(edge[0]);
        let v = parseInt(edge[1]);
        matrix[u][v] = 1; 
        matrix[v][u] = 1;
    }
    return matrix;
}

let rows = 4;
let cols = 4;
let input = ["0 1", "0 2", "1 2", "2 3"];
let newMatrix = createAdjMat(matrix, rows, cols);
console.log("Adj Matrix", newMatrix);