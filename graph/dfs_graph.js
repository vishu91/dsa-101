const adjListFun = require('./adj_list');

function dfs(adjList, node, dfsData, visited) {
    visited[node] = 1;
    dfsData.push(node);
    // console.log("dfs call", adjList, node, dfsData, visited);
    adjList[node].forEach(element =>{
        if(!visited[element]){
            // console.log(adjList, node, dfsData, visited);
            dfs(adjList, element, dfsData, visited);
            // console.log(adjList, node, dfsData, visited);
        }
    });
    return dfsData;
    // console.log("Dfs ans", dfsData);
}

let input = ["0 1", "0 2", "1 3", "3 2"];
let rows = input.length;
let adjList = adjListFun(rows, input);
console.log(adjList);
let visited = Array(rows).fill(0);
let dfsData = dfs(adjList, 0, [], visited);
console.log(dfsData);