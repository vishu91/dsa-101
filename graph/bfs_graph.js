
const adjListFun = require('./adj_list');
const Queue = require('../queue/queueimp');

function bfs(adjList){
    // console.log(adjList.length);
    let visited = Array(adjList.length).fill(0);
    // console.log(visited);
    let queue = new Queue();
    queue.enqueue(0);
    let bfsData = [];
    visited[0] = 1;
    while(!queue.isEmpty()) {
        let node = queue.front();
        queue.dequeue();
        bfsData.push(node);
        adjList[node].forEach(element => {
            if(!visited[element]){
                queue.enqueue(element);
                visited[element] = 1;
                // console.log(element);
                // console.log(visited);
            }
        });
    }
    // console.log('visited',visited);
    console.log('bfs result', bfsData);
    // return bfsData;
}

// let input = ["0 1", "0 2", "1 2", "2 3", "3 4", "4 5", "3 1"];
let input = ["0 1", "1 2", "1 3", "0 4"];//, "4 5", "3 1"];
let rows = input.length;
let adjList = adjListFun(rows, input);
console.log(adjList)
bfs(adjList);
// let visited = Array(adjList.length).fill(0);
// let dfsData = dfs(adjList, 0, [], visited);
//     console.log("Dfs ans", dfsData);