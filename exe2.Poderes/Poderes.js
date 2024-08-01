const nameAtack = prompt("Nome do guerreiro de ataque:");
const powerAtack = parseFloat(
  prompt("Informe seu poder de ataque: (apenas números)")
);

const nameDefeat = prompt("Agora informe o nome do guerreiro de defesa:");
let lifeDefeat = parseFloat(
  prompt("Quantos pontos de vida o defensor possui?")
);
const powerDefeat = parseFloat(
  prompt("Informe seu poder de defesa: (apenas números)")
);
let escudo = prompt(
  "O defensor possui escudo de defesa? (S para sim, N para não)"
).toUpperCase;

let dano = 0;

if (powerAtack > powerDefeat && escudo == "N") {
  dano = powerAtack - powerDefeat;
  alert("O dano causado é = " + dano);
} else if (powerAtack > powerDefeat && escudo == "S") {
  dano = (powerAtack - powerDefeat) / 2;
  alert("O dano causado é = " + dano);
}