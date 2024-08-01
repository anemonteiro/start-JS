/*
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
*/

const nomeTurista = prompt("Turista, informe seu nome:");

let visitou = prompt("Você já visitou alguma cidade? (S/N)").toUpperCase();

let cidadeVisitada = [];

while (visitou === "S") {
    cidades = prompt("Informe o nome da cidade:");
    cidadeVisitada.push(cidades);
    visitou = prompt("Já visitou mais alguma cidade? (S/N)").toUpperCase();
}

if (cidadeVisitada.length > 0) {
    alert(`${nomeTurista}, você visitou as seguintes cidades: \n ${cidadeVisitada.join(", ")}`);
} else {
    alert("Você não visitou nenhuma cidade.")
}