
//picked it up from C haha
const FREE = 0;
const USED = 1;


let ID = function(){
    let free = null;
    
    let arr = [];
    this.get = function(){
        if(free === null){
            free = {
                id:arr.length,
                next:null,
                prev:null,
                state:FREE
            };
            arr.push(free);
        }
        let node = free;
        free = free.next;
        if(free !== null)free.prev = null;
        node.state = USED;
        return node.id;
    };
    this.free = function(id){
        let max = arr.length-1;
        if(id > max || arr[id].state === FREE){
            //coulda returned an error
            console.log("warning, the given id is not under use");
            return false;
        }
        arr[id].state = FREE;
        if(id === max){//perform memory reclaimation
            let i = max;
            for(i; i >= 0; i--){
                let node = arr[i];
                if(node.state == FREE){
                    let next = node.next;
                    let prev = node.prev;
                    if(next !== null)next.prev = prev;
                    if(prev !== null)prev.next = next;
                    //node gets garbage collected
                }else{
                    break;
                }
            }
            arr.length = i+1;//freeing up the array memory
        }else{
            let node = arr[id];
            node.next = free;
            node.prev = null;
            free = node;
        }
    };
};

module.exports = ID;