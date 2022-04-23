//map
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return Math.sqrt(x);
});
console.log(doubles)

//filter 
const mensaje = function() {  
    console.log("Este mensaje se muestra después de 3 segundos");
}
 
setTimeout(mensaje, 3000);

let suma = function(a,b){
    return a + b
}
console.log(suma(1,4))