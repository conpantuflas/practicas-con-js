//map
/*Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo 
array con la misma longitud que el original*/

/*let jugos = [1,4,7,9,40,15,25]
let jugosPorDos = jugos.map((caracter)=> {
    return caracter * 2
})
console.log(jugosPorDos)*/

/*let colores = [{nombre: "red"},{nombre: "yellow"},{nombre: "pink"},{nombre: "blue"}]
    colores.map((unColor, i)=> {
    unColor.id = i
    //if(unColor.id === )
    switch(unColor.id){
        case 1: unColor.rgb = '#ffffff'
        break
        case 2: unColor.rgb = '#00ffff' 
    }
})
console.log(colores)*/

//--------------------------------------------------------------------------------------------

//filter
/* 
-Recorre el array y retorna un nuevo array con aquellos elementos que pasen una d
eterminada condición.
-puede tener una funcion de callback tradicional o una callback de flecha
*/

//sintaxis tradicional number
/*let x = [1,35,46]
let xy = x.filter( (element) => element < 10 )
console.log(xy)*/

//number
/*let pelos = [1,30,55,2,8,4,80,35,46]
let mayoresDiez = pelos.filter( (element) => element < 10 && element > 5 || element > 30 )
console.log(mayoresDiez)*/

//string
/*let nombres = ["juanita","hellokittie","barbie","pop"]
let nombresFiltrados =  nombres.filter((name) => name.length < 5 )
console.log(nombresFiltrados)*/

//--------------------------------------------------------------------------------------------

//sort
/*ordena los string alfabeticamente y numeros de mayor a menor dependiendo de si le paso suma o 
le paso resta*/

//string
/*let frutas = ["zapallo","arandano","pera"]
let frutasOrdenadas = frutas.sort()
console.log(frutasOrdenadas)*/

//number
/*let edades = [23,15,7]
let edadesOrdenadas = edades.sort(function(a,b){
    return a -b
})
console.log(edadesOrdenadas)*/

//----------------------------------------------------------------------------------------------

//reduce 
/*El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en 
cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y 
resultante
acepta solo suma y resta
*/
/*const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial);*/

//----------------------------------------------------------------------------------------------

//forEach , recorre un arreglo
/*let perros = ["pug", "labrador", "kiltro"]
perros.forEach(function (can, i) {
    console.log(can, i)
})*/