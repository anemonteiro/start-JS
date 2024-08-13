const palavraInformada = prompt("Informe a palavra que deseja analisar:").toLowerCase();

let palavraPalindromo = [];


for (i = palavraInformada.length-1; i >= 0; i--) {
    palavraPalindromo.push(palavraInformada[i]);
}

if (palavraPalindromo.join("") === palavraInformada) {
    alert(`Essa palavra é um PALÍNDROMO:\nEscrita normal: ${palavraInformada}\nEscrita ao inverso: ${palavraPalindromo.join("")}`);
} else {
    alert(`Não são palíndromos: \nEscrita normal: ${palavraInformada}\nEscrita ao inverso: ${palavraPalindromo.join("")}`)
}
