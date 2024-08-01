let valorMetros = parseFloat(prompt("Informe o valor em metros:"))

let unidadeMedida = prompt("Escolha para qual medida será convertido:\nmilímetro(mm)\ncentimetro(cm)\ndecímetro(dm)\ndecâmetro(dam)\nhectômetro(hm)\nquilômetro(km)")

switch (unidadeMedida) {
    case "mm":
        valorMetros *= 1000
        alert("O valor convertido em milímetros é =" + valorMetros)
        break
    case "cm":
        valorMetros *= 100
        alert("O valor convertido em centimetros é =" + valorMetros)
        break
    case "dm":
        valorMetros *= 10
        alert("O valor convertido em decimetros é =" + valorMetros)
        break
    case "dam":
        valorMetros /= 10
        alert("O valor convertido em decâmetros é =" + valorMetros)
        break
    case "hm":
        valorMetros /= 100
        alert("O valor convertido em hectômetros é =" + valorMetros)
        break
    case "km":
        valorMetros /= 1000
        alert("O valor convertido em quilômetros é =" + valorMetros)
        break
    default:
        alert("Informe corretamente a SIGLA da medida.")
}