let cartas = ["A", "J", "K", "4", "5"];
let opcao;

do {
    opcao = prompt("baralho atual: " + cartas.join(" ,") + "\n\nO que você deseja:\n1- Adicionar uma carta\n2- Puxar uma carta\n3- Sair");


    switch (opcao) {
        case "1":
            let novaCarta = prompt("Nome da carta:");
            if(novaCarta) {
                cartas.push(novaCarta);
                alert("Carta adicionada com sucesso!");
            } else {
                alert("Nenhuma carta adicionada.");
            }
            break;

        case "2":
            if(cartas.length > 0) {
            alert("Você puxou a carta do topo: " + cartas.pop());
            } else {
                alert("Não há cartas no baralho")
            }
            break;

        case "3":
            alert("Obrigada por jogar conosco, até a próxima!");
            break;

        default:
            alert("Essa opção não existe!");
    }
} while(opcao !== "3");