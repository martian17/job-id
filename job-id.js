const FREE = 0;
const USED = 1;


let ID = function(){
    let free = null;
    let tail = null;
    
    let arr = [];
    this.get = function(){
        if(free === null){
            free = {
                id:arr.length,
                next:null,
                prev:null,
                state:FREE
            };
            tail = free;
            arr.push(free);
        }
        let node = free;
        //console.log(free);
        node.state = USED;
        if(tail === free){
            free = null;
            tail = null;
        }else{
            free = free.next;
            free.prev = null;
        }
        return node.id;
    };
    this.free = function(id){
        let max = arr.length-1;
        if(id > max || arr[id].state === FREE){
            //coulda returned an error
            console.log("warning, the given id is not under use");
            return false;
        }
        //console.log(free);
        arr[id].state = FREE;
        if(id === max){//perform memory reclaimation
            let i = max;
            for(i; i >= 0; i--){
                let node = arr[i];
                if(node.state === FREE){
                    let next = node.next;
                    let prev = node.prev;
                    if(node === free)free = free.next;
                    if(node === tail)tail = tail.prev;
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
            node.next = null;
            node.prev = tail;
            if(tail !== null){
                tail.next = node;
            }else{
                free = node;
            }
            tail = node;
        }
    };
};

module.exports = ID;