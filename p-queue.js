//this is an incomplete implementation of pqieie. I only implemented the method I'm going to be using in job-id.js

let USED = 0;

let Pqueue = function(table){//where you store the values
    let arr = [-Infinity];//the 0th index will not be unused
    
    let updateArr = function(idx,val){
        let tval = table[idx];
        table[val] = idx;//when unused -1
        arr[idx] = val;
    };
    
    
    this.insert = function(val){//O(1)
        let idx = arr.length;
        let idx1 = Math.floor(idx/2);//swap out with |0 to see the performance
        arr.push(val);//push is faster than arr[len] = something
        while(arr[idx1] > val){
            updateArr(idx,arr[idx1]);
            idx = idx1;
            idx1 = Math.floor(idx/2);
        }
        updateArr(idx,val);
    };
    this.pop = function(){//O(logn)
        if(arr.length > 2){
            let idx = 1;
            let val = arr[idx];//unsafe, ensure safety outside the function (using length) for the best performance
            let tail = arr.pop();
            this.replaceIdx(idx,tail);
            table[val] = 0;//setting it to be used
            return val;
        }else if(arr.length === 2){
            let val = arr.pop();
            table[val] = 0;
            return val;
        }else if(arr.length < 2){
            console.log("warning: nothing to pop");
            return undefined;
        }
    };
    this.delete = function(id){//O(logn)
        //unsafe. filtering will be done outside
        if(arr.length > 2){
            let idx = table[id];
            let val = arr[idx];
            let tail = arr.pop();
            this.replaceIdx(idx,tail);
            table[val] = 0;//setting it to be used
        }else if(arr.length === 2){
            let val = arr.pop();
            table[val] = 0;
        }else if(arr.length < 2){
            console.log("warning: nothing to delete");
            return undefined;
        }
    };
    
    this.replaceIdx = function(idx,val){
        let len = arr.length;
        //console.log(idx*2,arr.length);
        while(idx*2+1 < len){
            let idx1 = idx*2;
            let idx2 = idx1+1;
            if(arr[idx2] < arr[idx1]){
                idx1 = idx2;
            }
            if(arr[idx1] < val){
                updateArr(idx,arr[idx1]);
                idx = idx1;
            }else{//the val found a spot
                updateArr(idx,val);
                return;
            }
        }
        //the spot landed on the last 2
        if(idx*2 < len && arr[idx*2] < val){//there's one remaining & the remaining one is smaller than the val
            updateArr(idx,arr[idx*2]);
            updateArr(idx*2,val);
        }else{
            updateArr(idx,val);//foud a spot just above the bottom
        }
    };
    
    
    
    this.arr = arr;
    this.displayArr = function(){
        let aa = [];
        let a = [];
        let ss = 2;
        for(let i = 1; i < arr.length; i++){
            if(i >= ss){
                aa.push(a);
                a = [];
                ss *= 2;
            }
            a.push(arr[i]);
        }
        aa.push(a);
        //console.log(arr);
        console.log(aa.map(b=>b.join(" ")).join("\n"));
    }
};

module.exports = Pqueue;



/*
1
2   1
2 1 1 1
21119917

1
2   1
2 1 7 1
2111991
*/