let number = parseFloat(prompt("Digite um número para descobrir sua tabuada:"));
let multiplicacao = [];

if (number === 0) {
    alert("Todo número multiplicado por 0 = 0.")
} else { 
    for (i = 1; i <= 20; i++) {
        multiplicacao.push(`${number} X ${i} = ${number * i}`);
    }
}

alert(`Resultado da Multiplicação:\n${multiplicacao.join(`\n`)}`);
let = " ";