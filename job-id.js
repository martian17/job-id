const pqueue = require("./p-queue.js");

const USED = 0;


let ID = function(){
    let arr = [];
    let free = new pqueue(arr);
    
    this.get = function(){
        if(free.arr.length === 1){//queue empty
            let id = arr.length;
            arr.push(USED);
            return id;//common case fast
        }
        let id = free.pop();
        return id;
    };
    this.free = function(id){//logn
        let max = arr.length-1;
        if(id > max || arr[id] !== USED){
            //coulda returned an error
            console.log("warning, the given id is not under use");
            return false;
        }
        if(id === max){//perform memory reclaimation
            let i = max-1;
            for(i; i >= 0; i--){
                if(arr[i] !== USED){
                    free.delete(i);
                    arr.pop();
                }else{
                    break;
                }
            }
        }else{
            free.insert(id)
        }
    };
};

module.exports = ID;