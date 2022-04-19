

//cambio de color de texto
let div = document.getElementById("div")
console.log(div)

div.innerHTML = `
<h1 id="texto" >cambio de color</h1>
<button id="boton">cambio</button>
<button id="bg">bg</button>
`

let texto = document.getElementById("texto")
let boton = document.getElementById("boton")
let bg = document.getElementById("bg")

boton.addEventListener("click",
function cambioDeColor(){
    switch(texto.style.color){
        case '': texto.style.color = "red"
        break;
        case 'red': texto.style.color = "blue"
        break;
        case 'blue': texto.style.color = ""
        break;
    }
}
)

bg.addEventListener("click",
function cambioDeBackGround(){
    switch(texto.style.backgroundColor){
        case '': texto.style.backgroundColor = "red"
        break;
        case'red': texto.style.backgroundColor = "green"
        break;
        case 'green': texto.style.backgroundColor = "blue"
        break;
    }
}
)