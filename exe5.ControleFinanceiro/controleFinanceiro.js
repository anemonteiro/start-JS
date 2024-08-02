let valorInicial;
let opcao;
do{
    valorInicial = prompt("Quanto de dinheiro você possui? (R$):");
    valorInicial= parseFloat(valorInicial);

    opcao = prompt(`${valorInicial} R$. Você deseja:\n1- Depositar\n2- Sacar\n3- Sair`)

    switch (opcao) {
        case "1":
            depositar = prompt("Qual a quantidade a ser depositada? R$:");
            depositar = parseFloat(depositar);
            depositar += valorInicial;
            alert(`Depóstito feito, valor atual: ${depositar} R$.`)
            break;
        case "2":
            sacar = prompt("Qual a quantidade a ser sacada? R$:");
            sacar = parseFloat(sacar);
            valorInicial -= sacar;
            alert(`Saque feito, valor atual: ${valorInicial} R$.`)
            break;
        case "3":
            break;
    }
} while(opcao !== "3")

    alert(`Nosso banco agradece a sua confiança, até logo!`);

