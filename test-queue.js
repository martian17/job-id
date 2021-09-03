let pqueue = require("./p-queue.js");
let q = new pqueue([]);

let a = "3141592653589793238".split("").map(b=>parseInt(b));

for(let i = 0; i < a.length; i++){
    console.log("inserting: "+a[i]);
    q.insert(a[i]);
    //q.displayArr();
    //console.log("");
}

for(let i = 0; i < a.length; i++){
    //q.displayArr();
    console.log("got out: "+q.pop());
}
console.log("got out: "+q.pop());
console.log("got out: "+q.pop());



