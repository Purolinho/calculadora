var numerostexto = [];

const numeros = document.querySelectorAll('.numeros')

var n0 = document.getElementById("0").addEventListener("click", adicionar)
var n1 = document.getElementById("1").addEventListener("click", adicionar)
var n2 = document.getElementById("2").addEventListener("click", adicionar)
var n3 = document.getElementById("3").addEventListener("click", adicionar)
var n4 = document.getElementById("4").addEventListener("click", adicionar)
var n5 = document.getElementById("5").addEventListener("click", adicionar)
var n6 = document.getElementById("6").addEventListener("click", adicionar)
var n7 = document.getElementById("7").addEventListener("click", adicionar)
var n8 = document.getElementById("8").addEventListener("click", adicionar)
var n9 = document.getElementById("9").addEventListener("click", adicionar)


var adicionar = document.getElementById("adicionar").addEventListener("click", adicionar)
var subtrair = document.getElementById("subtrair").addEventListener("click", adicionar)

function adicionar() {

    var teste = this

        numerostexto.push(teste.textContent)
        numerostexto.join('')
        const res = document.getElementById("res").innerHTML = numerostexto.join(' ')

}