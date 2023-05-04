// Lembrete: Conter Espaço?
const validos = 'abcçdefghijklmnopqrstuvwxyzABCÇDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/()[]{}@#! ';

const especifico = "xyztw"

const test2 = "1abc ed"
const test3 = "/*-/+/*-+*-"
const test4 = "21421  52141"
const test5 = "                "
const test6 = "   */-*+/*  "


const testEspecifico = "x1x2y5" // parte
const test1 = "222 814721hjhfieufheiu"

alert(testador(test2))



function generateTokens(input) {
  let index = 0;
  const tokens = [];
  const inputLength = input.length;

  while (index < inputLength) {
    let char = input[index];

    if (char === ' ') {
      index++;
      continue;
    }

    if (!VALID_CHARS.includes(char)) {
      throw new Error(`Token inválido: ${char}`);
    }

    if (/[a-zA-Z]/.test(char)) {
      let value = char;

      // Verifica se a string contém os caracteres x, y, z ou w alternados com operadores matemáticos e/ou caracteres especiais
      if (['x', 'y', 'z', 'w'].includes(char)) {
        let i = index + 1;

        while (i < inputLength) {
          const nextChar = input[i];

          if (!VALID_CHARS.includes(nextChar) || /[a-zA-Z]/.test(nextChar)) {
            break;
          }

          i++;

          if (i % 2 === 0) {
            const prevChar = input[i - 2];
            const operator = input[i - 1];

            if (!['+', '-', '*'].includes(operator) && !['(', ')', '[', ']', '{', '}', '@', '#', '!'].includes(operator)) {
              break;
            }

            if (!['x', 'y', 'z', 'w'].includes(prevChar)) {
              break;
            }

            value += operator + prevChar;
          } else {
            value += nextChar;
          }
        }

        if (value.length > 1) {
          tokens.push({ type: 'expressão matemática', value });
          index = i;
          continue;
        }
      }

      while (/[a-zA-Z0-9]/.test(input[++index])) {
        value += input[index];
        console.log(input[index])
      }

      tokens.push({ type: 'letra', value });
    } else if (/[0-9]/.test(char)) {
      let value = char;

      while (/[0-9]/.test(input[++index])) {
        value += input[index];
      }

      tokens.push({ type: 'número', value });
    } else if (/[\+\-\*]/.test(char)) {
      tokens.push({ type: 'operador matemático', value: char });
      index++;
    } else {
      tokens.push({ type: 'caractere especial', value: char });
      index++;
    }
  }
}

function testador(input="") {
  if(input.length > 10)
    input = input.substring(0,10)

  let index = 0
  let tamanho = input.length - 1


  for (let count  = 0; count <= tamanho; count += 1) {
    let analisarToken = input.charAt(count)

    if (count == 0 && /[0-9]/.test(analisarToken)) {
      return `"${input}" - Palavra reservada pelo sistema`

    } else if (especifico.includes(analisarToken)) {
        console.log(analisarToken," - parte 2")


    } else if(validos.includes(analisarToken)) {
        console.log(analisarToken," - Aceito")

    } else
      return `" ${analisarToken} " - Não pertence ao conjunto lexical da linguagem`
  }
  return `Cadeia Aceita - "${input}"`

}