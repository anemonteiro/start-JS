imoveisCadastrados = [];
let menu;

do {
    menu = prompt(`Quantidade de imóveis cadastrados: ${imoveisCadastrados.length}` + "\n\nVocê deseja:\n1- Salvar um novo imóvel\n2- Ver todos os imóveis\n3- Sair");

    switch (menu) {
        case "1":
            let novoImovel = {}
            novoImovel.proprietario = prompt("Nome do proprietário:"),
            novoImovel.quartos = parseInt(prompt("Quantos quartos?")),
            novoImovel.banheiros = parseInt(prompt("Quantos banheiros?")),
            novoImovel.garagem = prompt("Possui garagem? (s/n)").toLowerCase();

            imoveisCadastrados.push(novoImovel);
            alert("Imóvel cadastrado com sucesso!");
            break;

        case "2":
            let lista = "";
            for(let i = 0; i < imoveisCadastrados.length; i++) {
                let possuiGaragem = imoveisCadastrados[i].garagem === "s" ? "Sim" : "Não";

                lista += `Imóvel ${i+1}:\n` +
                `Proprietário: ${imoveisCadastrados[i].proprietario}, ` + 
                `Quartos: ${imoveisCadastrados[i].quartos}, ` +
                `Banheiros: ${imoveisCadastrados[i].banheiros}, ` +
                `Garagem: ${possuiGaragem}\n\n`
            }

            alert(lista);
            break;
        
        case "3":
            alert("Saindo...")
            break;

        default:
            alert("Opção não é válida")
    }
} while (menu !== "3");

