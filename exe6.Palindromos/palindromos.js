/*
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.
*/

const palavraInformada = prompt("Informe a palavra que deseja analisar:");
let palavraPalindromo = [];

for (i = palavraInformada.length; i >= 0; i--) {
    palavraPalindromo.push(palavraInformada[i]);
}

if (palavraPalindromo.join("") === palavraInformada) {
    alert(`Essa palavra é um PALÍNDROMO:\nEscrita normal: ${palavraInformada}\nEscrita ao inverso: ${palavraPalindromo.join("")}`);
} else {
    alert(`Não são palíndromos: \nEscrita normal: ${palavraInformada}\nEscrita ao inverso: ${palavraPalindromo.join("")}`)
}
