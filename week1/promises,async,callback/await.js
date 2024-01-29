function getdata(dataid) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataid);
            resolve("succes");
        },2000);
    });
}

async function getalldata() {
    console.log("getting data....");
    await getdata(1);
    await getdata(2);
    await getdata(3);
}

getalldata();