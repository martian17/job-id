let ID = new (require("./job-id.js"))();

console.log(ID);
let IDD = {//verbose wrapper
    get:()=>{
        console.log("got "+ID.get());
    },
    free:(id)=>{
        console.log("freeing "+id);
        ID.free(id)
    }
};

IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.get();

IDD.free(0);
IDD.free(2);
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.free(20);