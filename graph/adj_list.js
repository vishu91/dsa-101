function createAdjList(rows, input){
    let list = [];
    for(let i = 0; i < rows; i++){
        let edge = input[i].split(' ');
        let u = parseInt(edge[0]);
        let v = parseInt(edge[1]);
        if(!list[u]){
            list[u] = [];
        }
        if(!list[v]){
            list[v] = [];
        }
        list[u].push(v);
        list[v].push(u);
    }
    // console.log(list);
    return list;
}

// let rows = 4;
// let input = ["0 1", "0 2", "1 2", "2 3"];
// let list = createAdjList(rows, input);
module.exports = createAdjList;
// console.log(list);


