const a = 0.735, b = 0.745, E = 0.0001
let x1 , x2,n=0,k

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function fun(x) {
    return (x * x / 2 - Math.sin(x));
}

for (let index = false; index === false; n++) {
    if ((b-a)/fib(n)<=E) {
        index=true
    }
}
n--;
k=n-2;
for (;n>=0 ; n--,k--) {
    console.log('x1='+(x1=a+fib(k)/fib(n)*(b-a)))
    console.log('x2='+(x2=a+fib(k+1)/fib(n)*(b-a)))
    console.log("f1=" + fun(x1));
    console.log("f2=" + fun(x2));
}