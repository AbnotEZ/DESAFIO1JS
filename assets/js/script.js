
function calcular(){
//Variables
const precio = Number(400000);
let cantidad = document.querySelector("#cantidad")
let total = precio * Number(cantidad.value);

//Valores Elegidos
let NumeroElegido = document.querySelector("#NumeroElegido")
NumeroElegido.innerHTML = Number(cantidad.value)

//Total
let totalFinal = document.querySelector("#TotalFinal")
totalFinal.innerHTML = total

//circulo
let userColor = document.querySelector("#color")
let circuloColor = document.querySelector(".circulo")
circuloColor.style.backgroundColor = userColor.value
}





