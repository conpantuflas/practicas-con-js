
let divDos = document.getElementById("divDos")
console.log(divDos)

divDos.innerHTML=`
<h2 id=hambre>Hambre de...</h2>
<button id=clickMe>Click me</button>
`

let hambre = document.getElementById("hambre")
let clickMe = document.getElementById("clickMe")

clickMe.addEventListener("click",
function cambioDeHambre(){
    switch(hambre.innerText){
        case'Hambre de...': hambre.innerText = "desayuno"
        break;
        case'desayuno': hambre.innerText = "almuerzo"
        break;
        case'almuerzo': hambre.innerText = "cena"
        break;
        case'cena': hambre.innerText = "Hambre de..."
        break;
    }
    console.log(hambre.innerText)
}
)