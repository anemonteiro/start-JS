let nomeCarro1 = prompt("Nome do primeiro carro: ")
let velCarro1 = prompt("Qual a velocidade (em KM/h): ")
let nomeCarro2 = prompt("Nome do segundo carro: ")
let velCarro2 = prompt("Qual a velocidade (em KM/h): ")

let velocidade1 = parseInt(velCarro1)
let velocidade2 = parseInt(velCarro2)

if (velocidade1 > velocidade2) {
    alert("O carro de nome " + nomeCarro1 + " é o mais rápido.")
} else if (velocidade1 == velocidade2) {
    alert("Não há vencedores, velocidades iguais.")
} else {
    alert("O carro de nome " + nomeCarro2 + " é o mais rápido.")
}