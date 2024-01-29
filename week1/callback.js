function square(a) {
    return a*a;
}

function cube(a) {
    return a*a*a;
}

function sumofsomething(a,b,fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;

}

const ans = sumofsomething(2,2,cube);
console.log(ans);