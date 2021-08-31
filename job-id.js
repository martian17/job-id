//util
let isObjEmpty = function(obj){
    for(let i in obj){
        return false;
        break;
    }
    return true;
};

let ID = (new function(){
    let free = {};
    let used = {};
    let max = 0;
    this.get = function(){
        if(isObjEmpty(free)){
            free[max] = 1;
            max++;
        }
        for(let id in free){
            delete free[id];
            used[id] = 1;
            return id;
        }
    };
    this.free = function(id){
        if(id in used){
            delete used[id];
            free[id] = 1;
        }else{
            console.log(`warning: the id given is not used (${id})`);
        }
    };
}());

module.exports = ID;
