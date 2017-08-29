function square(x){
    return x*x;
}
function map(array,callback){
    var i =0;
    var newArray = [];
    while(i<array.length){
        newArray[i] = callback(array[i]);
        i++;
    }
    return newArray;
}
var a = [1,2,3];

var NewArray = map(a,square);
console.log(NewArray);

