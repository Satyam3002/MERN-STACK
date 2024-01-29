function getdata(dataid,getnextdata) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataid);
            if(getnextdata) {
                getnextdata();
            }
            resolve("succes");
        },2000);
    });
}

//callbackhell
getdata(1, () => {
    console.log("getting data 2...");
    getdata(2,() => {
        console.log("getting data 3...");
        getdata(3,()=> {
            console.log("getting data 4...");
            getdata(4);
        });
    });
});

