
//queue with mentioned size limit

let queue = [];
let n = 5;
let Rear = -1; // -1 means queue is empty, nothing inserted yet

function insertionqueue(a) {
    if (Rear === n - 1) {
        console.log("overflow, exiting");
        return; 
    }
    Rear++;
    queue.push(a);
    console.log(queue);
}

insertionqueue(5);ssjfhgyagjfn
insertionqueue(332);
insertionqueue(12);
insertionqueue(5248889);
insertionqueue(4444);
insertionqueue(999);
