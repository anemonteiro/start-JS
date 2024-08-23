let pacientes = ["Ana", "Maria", "Pedro", "Fernanda"];

do {
    let esperaPacientes = [];
    for (let i = 0; i <= pacientes.length-1; i++) {
        esperaPacientes.push(`${i+1}º - ${pacientes[i]}`)
    }
    
    let menu = prompt("Lista de espera:\n" + esperaPacientes.join("\n") + ("\n\nEscolha uma ação:\n1- Cadastrar novo paciente\n2- Consultar paciente\n3- Sair"))

    switch (menu) {
        case "1": 
        let novoPaciente = prompt("Nome do paciente:")
        pacientes.push(novoPaciente)
        break;

        case "2": 
        alert(`Primeiro da fila: ${pacientes.shift()}`)
        break;

        case "3":
        alert("Saindo...")
        break
1
        default:
        alert("Essa opção não existe!");
    }

} while (menu !== "3");

/*
let pacientes = ["Ana", "Maria", "Pedro", "Fernanda"];
let menu;

do {
    // Reinicializa esperaPacientes a cada iteração
    let esperaPacientes = [];
    for (let i = 0; i < pacientes.length; i++) {
        esperaPacientes.push(`${i + 1}º - ${pacientes[i]}`);
    }
    
    // Exibe o menu e captura a escolha do usuário
    menu = prompt("Lista de espera:\n" + esperaPacientes.join("\n") + "\n\nEscolha uma ação:\n1- Cadastrar novo paciente\n2- Consultar paciente\n3- Sair");

    switch (menu) {
        case "1":  // Corrigido para string "1"
            let novoPaciente = prompt("Nome do paciente:");
            if (novoPaciente) {
                pacientes.push(novoPaciente);
            }
            break;

        case "2":  // Corrigido para string "2"
            if (pacientes.length > 0) {
                alert(`Primeiro da fila: ${pacientes.shift()}`);  // Remove o primeiro paciente
            } else {
                alert("Não há pacientes na fila.");
            }
            break;

        case "3":  // Corrigido para string "3"
            alert("Saindo...");
            break;

        default:
            alert("Essa opção não existe!");
    }

} while (menu !== "3");  // Corrigido para comparação com string "3"
*/


