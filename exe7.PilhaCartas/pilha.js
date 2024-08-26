let cartas = ["A", "J", "K", "4", "5"];
let opcao;

do {
    opcao = prompt("baralho atual: " + cartas.join(" ,") + "\n\nO que você deseja:\n1- Adicionar uma carta\n2- Puxar uma carta\n3- Sair");


    switch (opcao) {
        case "1":
            cartas.push(prompt("Nome da carta:"));
            break;

        case "2":
            alert("Carta do topo: " + cartas[cartas.length-1]);
            break;

        case "3":
            alert("Obrigada por jogar conosco, até a próxima!")
    }
} while(opcao !== "3");