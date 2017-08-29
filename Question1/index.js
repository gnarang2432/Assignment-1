function sum(a,b){
    console.log(a+b);
}

function setTimeOutSync(callback,n){
    var n1 = Date.now();
    while((Date.now()-n1)!=n*1000){

    }
    callback(2,3);
}

setTimeOutSync(sum,3);