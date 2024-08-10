const createAdjList = require('./adj_list');
const Queue = require('../queue/queueimp');

function shortestPath(adjList, len) {
    let visited = Array(len).fill(0);
    let dist = Array(len).fill(Infinity);
    let queue = new Queue();
    queue.enqueue(0);
    let bfsData = [];
    visited[0] = 1;
    dist[0] = 0;
    while(!queue.isEmpty()){
        let node = queue.front();
        queue.dequeue();
        bfsData.push(node);
        adjList[node].forEach(element =>{
            if(!visited[element]){
                dist[element] = dist[node] + 1;
                visited[element] = 1;
                queue.enqueue(element);
            }
        });
    }
    console.log('bfsData', bfsData);
    console.log('distance', dist);

}

let input = ["0 1", "0 2", "1 3", "3 2"];
let rows = input.length;
let adjList = createAdjList(rows, input);
console.log(adjList);
shortestPath(adjList, rows);
// console.log(typeof Infinity);
