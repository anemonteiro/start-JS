let valorInicial = prompt("Quanto de dinheiro você possui? (R$):");
valorInicial= parseFloat(valorInicial);
let opcao;
do{
    opcao = prompt(`Saldo disponível: ${valorInicial} R$.\nVocê deseja:\n1- Depositar\n2- Sacar\n3- Sair`)

    switch (opcao) {
        case "1":
            valorInicial += parseFloat(prompt("Informe a quantia a ser depositada:"));
            alert(`Depósito realizado com sucesso!\nSaldo atual: ${valorInicial} R$.`)
            break;
        case "2":
            valorInicial -= parseFloat(prompt("Informe a quantia a ser sacada:"));
            alert(`Saque realizado com sucesso!\nSaldo atual: ${valorInicial} R$.`)
            break;
        case "3":
            break;
    }
} while(opcao !== "3")

    alert(`Nosso banco agradece a sua confiança, até logo!`);

