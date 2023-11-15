function executarTarefa() {
    var num1 = 10;
    var num2 = 100;

    alert("Soma: " + (num1 + num2) + "\n" +
        "Subtração: " + (num1 - num2) + "\n" +
        "Divisão: " + (num2 / num1) + "\n" +
        "Multiplicação: " + (num1 * num2));
}

var resultadoLoop = document.getElementById("resultadoLoop");
for (var i = 10; i <= 100; i++) {
    resultadoLoop.innerHTML += i + " ";
}

var numTabuada = 5;
var tabuada = document.getElementById("tabuada");
for (var j = 1; j <= 10; j++) {
    tabuada.innerHTML += numTabuada + " x " + j + " = " + (numTabuada * j) + "<br>";
}

var valoresPares = document.getElementById("valoresPares");
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var k = 0; k < arrayNumeros.length; k++) {
    if (arrayNumeros[k] % 2 === 0) {
        valoresPares.innerHTML += arrayNumeros[k] + " ";
    }
}

function exibirTabuada() {
    var numPersonalizado = document.getElementById("numeroTabuada").value;
    var tabuadaPersonalizada = document.getElementById("tabuadaPersonalizada");

    tabuadaPersonalizada.innerHTML = "Tabuada do " + numPersonalizado + ":<br>";
    for (var l = 1; l <= 10; l++) {
        tabuadaPersonalizada.innerHTML += numPersonalizado + " x " + l + " = " + (numPersonalizado * l) + "<br>";
    }
}

function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacao = document.getElementById("operacao").value;
    var resultadoCalculadora = document.getElementById("resultadoCalculadora");

    switch (operacao) {
        case "+":
            resultadoCalculadora.innerHTML = "Resultado: " + (parseInt(num1) + parseInt(num2));
            break;
        case "-":
            resultadoCalculadora.innerHTML = "Resultado: " + (parseInt(num1) - parseInt(num2));
            break;
        case "*":
            resultadoCalculadora.innerHTML = "Resultado: " + (parseInt(num1) * parseInt(num2));
            break;
        case "/":
            resultadoCalculadora.innerHTML = "Resultado: " + (parseInt(num1) / parseInt(num2));
            break;
        default:
            resultadoCalculadora.innerHTML = "Operação inválida";
    }

    function calcularCustoFinal() {
        var custoFabrica = parseFloat(document.getElementById("custoFabrica").value) || 0;
        var percDistribuidor = parseFloat(document.getElementById("percDistribuidor").value) || 0;
        var percImpostos = parseFloat(document.getElementById("percImpostos").value) || 0;
      
        var custoFinal = custoFabrica + (custoFabrica * percDistribuidor / 100) + (custoFabrica * percImpostos / 100);
      
        document.getElementById("valorfinal").value = custoFinal.toFixed(2);
      }
      
      
}
