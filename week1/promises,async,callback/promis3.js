function getdata(dataid) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataid);
            resolve("succes");
        },2000);
    });
}

getdata(1)
.then((res) => {
    return getdata(2);
})
.then((res) => {
    return getdata(3);
})
.then((res) => {
    console.log(res);
});