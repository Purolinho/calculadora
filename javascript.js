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

var logaritmo = document.getElementById("log").addEventListener("click", adicionar)
var raiz = document.getElementById("√").addEventListener("click", adicionar)
var porcentagem = document.getElementById("%").addEventListener("click", adicionar)
var potecia = document.getElementById("^").addEventListener("click", adicionar)
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
    } else if(key == "√") {
        numerostexto.push("√(")
        controle++
    }else if(key == "log") {
        numerostexto.push("log(")
        controle++
    }else {
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
                var index = numerostexto.join("").toString().length
                var string = numerostexto.join("").toString()
                let novaString = ""

                for(let i = 0; i <= index; i++) {
                    if(numerostexto.join("").toString("").charAt(i) == "%") {
                        novaString += "/100"

                    } else if(numerostexto.join("").toString("").charAt(i) == "^") {
                        novaString += "**"

                    } else if(numerostexto.join("").toString("").charAt(i) == "√") {
                        let controleRaiz = true
                        let numeroRaiz = ""
                        let numeroLoopRaiz = 0
                        let cortarParenteses = numeroLoopRaiz - 2
                        let stringRaiz = "Math.sqrt(" + numeroRaiz.toString() + ")"

                        while(controleRaiz == true) {
                            if(string.charAt(numeroLoopRaiz) == "") {
                                controleRaiz = false
                            }
                            if(string.charAt(numeroLoopRaiz) == ")") {
                                controleRaiz = false
                            }
                            if(numeroLoopRaiz > 0) {
                                numeroRaiz += string.charAt(numeroLoopRaiz)
                            }
                            numeroLoopRaiz++
                        }
                        novaString += stringRaiz.slice(0,cortarParenteses)
                        setTimeout(() => {
                            if(novaString.charAt(novaString.length-1) != ")") {
                                novaString += ")"
                            }
                        }, 1);
                        
                    }else if(numerostexto.join("").toString("").charAt(i) == "g") {
                        let controleLog = true
                        let numeroLog = ""
                        let numeroLoopLog = 0
                        while (controleLog == true) {

                            if(string.charAt(numeroLoopLog) == "") {
                                controleLog = false
                            }
                            if(string.charAt(numeroLoopLog) == ")") {
                                controleLog = false
                            }
                            if(numeroLoopLog > 2) {
                                numeroLog += string.charAt(numeroLoopLog)
                            }
                            numeroLoopLog++
                        } 
                        novaString = novaString.slice(2, numeroLoopLog)
                        novaString += "Math.log10" + ""
                        setTimeout(() => {
                            if(novaString.charAt(novaString.length-1) != ")") {
                                novaString += ")"
                            }
                        }, 1);
                        
                    } else {
                        novaString += numerostexto.join("").toString("").charAt(i)
                    }
                    
                }
                try {
                    var ans;
                    setTimeout(() => {
                        ans = eval(novaString)
                        if(ans != undefined || ans != NaN) {
                        res.innerHTML = ans
                        } else {
                            res.innerHTML = "Math error"
                        }
                    }, 1);
                } catch(error) {
                    res.innerHTML = "Syntax error"
                }
                setTimeout(() => {
                    numerostexto.length = 0
                    numerostexto.push(ans)
                }, 1);

            break;
        case "DC": 
                let remove = numerostexto.pop()
                res.innerHTML = numerostexto.join("")
    }


}