// Imprime o resultado da entrada na tela
function imprimir() {
    let entrada = document.querySelector("#entrada");
    let saida = document.querySelector("#saida");

    saida.innerHTML = Analisador(entrada.value);
}

// Limpra a área de entada e saida 
let btnLimpar = document.getElementById("btn-limpar");
btnLimpar.addEventListener("click", function () {
    let elementoDeEntrada = document.getElementById("entrada");
    let elementoSaida = document.getElementById("saida");

    elementoDeEntrada.value = null;
    elementoSaida.textContent = "";
});
