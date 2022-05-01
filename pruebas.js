/*var arr = [45,67,87,23,5,32,60];
let vacio = []
//Your code here.
for(i = arr.length-1; i >= 0; i --){
    vacio.push(arr[i])
}
console.log(vacio) */

//----------------------------------------------------------------------

/*var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let solin = []
//your code here
function remix (){
    for(a = 0; a < mix.length; a++){
        solin.push(typeof(mix[a]))
    }
}
remix()
console.log(solin)*/

//-------------------------------------------------------------------------
/*let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
   if('object' === typeof(myArray[index])){
       hello.push(myArray[index])
   }
}
console.log(hello)*/

//-----------------------------------------------------------------------------
/*let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
        if(item === 1){
            return_array.push(item)
        }    
        else if(item === 0){
            return_array.push("Yahoo")
        }
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));*/

//--------------------------------------------------------------------------

// let k = 0
// while(k < 9){
//     console.log(k)
//     k++
// }
// console.log("fin de while")

//-----------------------------------------------------------------------------

// let h = 0
// do{
//     console.log(h)
//     h++
// }while (h < 1)

//------------------------------------------------------------------------

let animales = ["loro","jirafa","caracol","hamster"]
for(let unAnimal in animales){
    console.log(unAnimal)
}