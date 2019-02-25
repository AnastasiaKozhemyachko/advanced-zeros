module.exports = function getZerosCount(number, base) {

var i = 0;
var del = 2;
var arr =[];
var arr_new =[];
var arr_itog =[];
var log_m;
var sum=0;
while (base>=del) {
    if(sum!=0){
        if(del==arr[i]){
            arr.pop();
            arr_new.pop();
        }
        arr.push(del);
        arr_new.push(sum);            
    }
    while (base % del == 0){
        base = base / del;
        sum++;
        if(sum!=0){
            if(del==arr[i]){
                arr.pop();
                arr_new.pop();
            }
            arr.push(del);
            arr_new.push(sum);            
        }
    }
    i++;
    del++;
    sum=0;
}
var z=0; 
var sum_itog;
for (var j = 0; j < arr.length; j++) {
    log_m= Math.floor(Math.log(number) / Math.log(arr[j]));
    for (var i = 1; i < log_m+1; i++) {
        z=z+Math.floor(number/Math.pow(arr[j],i));
    }
    sum_itog=z/arr_new[j];
    arr_itog[j]=sum_itog;
    z=0;    
}
var x = Math.floor(Math.min.apply(Math, arr_itog));
    return x;
}