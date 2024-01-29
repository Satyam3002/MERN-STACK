function findsum(n) {
    let ans = 0;
    for (let i=0; i < n ; i++) {
        ans +=i ;

    }
      console.log(ans);
}
function findsumtill100() {
    return findsum(100);
}

 findsumtill100();
//setTimeout(findsumtill100);
console.log("hello world");


setTimeout(function() {
    console.log("from inside async fn")
},20000);

setTimeout(function() {
    console.log("from inside async fn2")
},10000);


