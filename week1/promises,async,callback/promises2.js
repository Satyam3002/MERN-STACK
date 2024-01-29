function asyncfunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("succes");
        },4000);
    });
}

function asyncfunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("succes");
        },4000);
    });
}
   // promise chaining
console.log("fetching data1...");
 asyncfunc1().then((res) => {
  console.log("fetching data 2 ....");
    asyncfunc2().then((res) =>{
    });
 });

 