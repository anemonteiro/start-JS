let pacientes = ["Ana", "Maria", "Pedro", "Fernanda"];
let menu;
do {
    let esperaPacientes = [];
    for (let i = 0; i <= pacientes.length-1; i++) {
        esperaPacientes.push(`${i+1}º - ${pacientes[i]}`)
    }
    
    menu = prompt("Lista de espera:\n" + esperaPacientes.join("\n") + ("\n\nEscolha uma ação:\n1- Cadastrar novo paciente\n2- Consultar paciente\n3- Sair"))

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



