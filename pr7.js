const a=0.735, b=0.745,E=0.0001
let  xcp=(a+b)/2, x1=a+1/2*(b-a), x2=a+1/2*(b-a)


function fun(x){
    return (x*x/2-Math.sin(x));
}

console.log("f1="+fun(x1));
console.log("f2="+fun(x2));