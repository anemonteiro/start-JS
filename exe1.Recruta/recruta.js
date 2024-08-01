const nome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
let curso = prompt("Informe o curso do recruta:")
const nascimento = prompt("Informe o ano de nascimento do recruta:")

alert (
    "Recruta cadastrado com Sucesso!\n" +
    "\nNome: " + nome +
    "\nSobrenome: " + sobrenome +
    "\nCurso: " + curso +
    "\nIdade: " +  (2024 - nascimento)
)