const validos = "abcçdefghijklmnopqrstuvwxyzABCÇDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/()[]{}@#!áéíóúàèìòùâêîôûãẽĩõũÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃẼĨÕŨ ";

const especifico = "xyztw";
const alternador = "*-+/(){}[]@#!0123456789"
const numero = "0123456789"

function Analisador(input = "") {
    if (/[0-9]/.test(input.charAt(0))) return `"${input}" - Palavra reservada pelo sistema`;

    if (input.length > 10) input = input.substring(0, 10);

    let tipoultimoCaracter = null;
    let cadeiaAlternada = null;
    let modoExpressao = false;

    for (let count = 0; count <= input.length - 1; count += 1) {
        let token = input.charAt(count);

        if (especifico.includes(token)) {
            modoExpressao = true;
        } else if  (validos.includes(token)) {

        } else return `" ${token} " - Não pertence ao conjunto lexical da linguagem`;

        if (count > 0 && (cadeiaAlternada === true || cadeiaAlternada === null)) {
            if (cadeiaAlternada === null) cadeiaAlternada = true;

            if (tipoultimoCaracter === "LETRA") {
                if (!alternador.includes(token) && !numero.includes(token))
                    cadeiaAlternada = false;
            }
            else if (tipoultimoCaracter === "ALTERNADOR") {
                if (alternador.includes(token) && !numero.includes(token))
                    cadeiaAlternada = false;
            }

        }

        if (numero.includes(token) === true)
            tipoultimoCaracter = "NUMERO"
        else
            tipoultimoCaracter = alternador.includes(token) ? "ALTERNADOR" : "LETRA";
    }

    if ((cadeiaAlternada === false || cadeiaAlternada === null) && modoExpressao === true) return `Expressao matematica invalida - ${input}`;

    if (modoExpressao) return `${input} - E uma expressão matemática`;

    return "Cadeia Aceita";
}
