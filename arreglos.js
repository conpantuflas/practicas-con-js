
let vegetalesArray = ["palta","choclo","tomate","cebolla"]
let divTres = document.getElementById("divTres")

//divTres.innerHTML=`<button id=click>click</button>`
let click = document.getElementById("click")
let divCuatro = document.getElementById("divCuatro")
let contador = 0

function x (){
        divCuatro.innerHTML +=`
        <p>${vegetalesArray[contador]}</p>
        `
        contador = contador + 1
        // contador += 1
}
click.addEventListener("click",x)