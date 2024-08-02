let opcao;
do {
    opcao = prompt("Escolha seu esporte preferido, nossas opções são:\n1- Vôlei\n2- Futebol\n3- Basquete\n4- Handebol\n5- Encerrar (para finalizar a pesquisa)");

    switch (opcao) {
        case "1":
            alert(`Você escolheu o esporte: Vôlei.`)
            break
        case "2":
            alert(`Você escolheu o esporte: Futebol.`)
            break
        case "3":
            alert(`Você escolheu o esporte: Basquete.`)
            break
        case "4":
            alert(`Você escolheu o esporte: Handebol.`)
            break
        case "5":
            break
    }
} while (opcao !== "5")

alert("Você encerrou a pesquisa. Obrigada por participar!");
