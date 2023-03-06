var numerostexto = [];

const numeros = document.querySelectorAll('.numeros')

var C = document.getElementById("C").addEventListener("click", adicionar)

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

var porcentagem = document.getElementById("%").addEventListener("click", adicionar)
var DC = document.getElementById("DC").addEventListener("click", adicionar)
var virgula = document.getElementById(".").addEventListener("click", adicionar)
var parenteses = document.getElementById("()").addEventListener("click", adicionar)
var dividir = document.getElementById("/").addEventListener("click", adicionar)
var multiplicar = document.getElementById("*").addEventListener("click", adicionar)
var calcular = window.document.getElementById("=").addEventListener("click", adicionar)
var subtrair = document.getElementById("-").addEventListener("click", adicionar)
var adicionar = document.getElementById("+").addEventListener("click", adicionar)

var res = document.getElementById("res")

var controle = 0

function adicionar() {


    var teste = this
    let key = teste.textContent
    
    if(key != "=") {

    if(controle % 2 == 0 && key == "()") {

        numerostexto.push("(")
        controle++

    } else if(controle % 2 != 0 && key == "()") {

        numerostexto.push(")")
        controle++

    } else if(key == "DC"){
        //faz nada
    } else {
        numerostexto.push(key)
    }
        res.innerHTML = numerostexto.join("")

    }

    switch (key) {
        case "C":
                res.innerHTML = ""
                numerostexto.length = 0
            break;
        
        case "=":
                var ans = eval(numerostexto.join("").toString())
                res.innerHTML = ans
                numerostexto.length = 0
                numerostexto.push(ans)

            break;
        case "DC": 
                let remove = numerostexto.pop()
                res.innerHTML = numerostexto.join("")
    }

}