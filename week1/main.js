// console.log("hello world");
// let a = 1;
// a = 2;
// console.log(a);

// let firstname = "satyam";
// let age = 18;
// let ismarried = true;

// if (ismarried == true) {
//     console.log( firstname + "is married")
// }

// else {
//     console.log( firstname + "is not married")
// }


// const marks = [10,11,12,15,,16,100,224];
//  let n = marks.length;

// for(let i = 0; i<n; i++ ) {
//     if (marks[i]%2 ==0) {
//         console.log(marks[i]);
//     }
// }

const allusers = [{
    firstname: "satyam",
    gender:"male",
    age: 20,
}, {
    firstname: "shivam",
    gender:"male",
    age: 17,
}, {
    firstname: "anokhi",
    gender: "female",
    age: 25,
}]

for (let i = 0; i < allusers.length; i++) {
    if (allusers[i] ["gender"] == "male" && allusers[i]["age"]>18) {
        console.log(allusers[i]["firstname"]);
    }
}


function sum(a,b) {

    return a + b;
}
 const value = sum(1,2)
 console.log(value);