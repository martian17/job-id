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
IDD.free(6);
IDD.free(5);
IDD.free(7);
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.free(0);
IDD.free(3);
IDD.free(1);
IDD.free(2);
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.get();
IDD.free(20);