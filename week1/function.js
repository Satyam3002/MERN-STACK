function sum(num1,num2,fnTocall) {
    let result = num1 + num2;
    fnTocall(result);
}

function displayresult(data) {
    console.log("result of the sum is " + data);
}

function displayresultpassive(data) {
    console.log("sum's result is: " + data);

}

const ans = sum(1,2,displayresultpassive);