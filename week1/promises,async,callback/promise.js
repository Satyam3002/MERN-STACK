const getpromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
         //resolve("succes");
       reject("netwrk error");
    });
};

let promise = getpromise();
promise.then((res) => {
    console.log("promise fullfiled",res);
});

promise.catch((err) => {
    console.log("rejected", err);
});