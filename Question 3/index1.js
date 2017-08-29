function square(x){
    console.log(x*x);
}
function forEach(array,callback){
    var i =0;
    while(i<array.length){
        callback(array[i]);
        i++;
    }
}
var a = [1,2,3];


forEach(a,square);
