// Lembrete: Conter Espaço?
const validos = "abcçdefghijklmnopqrstuvwxyzABCÇDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/()[]{}@#!áéíóúàèìòùâêîôûãẽĩõũÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃẼĨÕŨ ";

const especifico = "xyztw";
const alternador = "*-+/(){}[]@#!0123456789"

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

        } else return "Não pertence ao conjunto lexical da linguagem";

        if (count > 0 && (cadeiaAlternada === true || cadeiaAlternada === null)) {
            if (cadeiaAlternada === null) cadeiaAlternada = true;

            if (tipoultimoCaracter === "LETRA") {
                if (!alternador.includes(token)) cadeiaAlternada = false;
            }
            if (tipoultimoCaracter === "ALTERNADOR") {
                if (alternador.includes(token)) cadeiaAlternada = false;
            }
        }

        tipoultimoCaracter = alternador.includes(token) ? "ALTERNADOR" : "LETRA";
    }

    if (cadeiaAlternada === false && modoExpressao === true) return `Expressao matematica invalida - ${input}`;

    if (modoExpressao) return `${input} - E uma expressão matematica`;

    return "Cadeia Aceita";
}