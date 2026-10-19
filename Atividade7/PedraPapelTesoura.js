// Sorteia um número de 0 a 100 para cada pessoa
const n1 = Math.floor(Math.random() * 101);
const n2 = Math.floor(Math.random() * 101);

// Declara as variáveis
let pessoa1, pessoa2, resultado;

// Pessoa 1
if (n1 <= 33) {
    pessoa1 = "Tesoura";
} else if (n1 <= 66) {
    pessoa1 = "Papel";
} else {
    pessoa1 = "Pedra";
}

// Pessoa 2
if (n2 <= 33) {
    pessoa2 = "Tesoura";
} else if (n2 <= 66) {
    pessoa2 = "Papel";
} else {
    pessoa2 = "Pedra";
}

// Verifica quem venceu
if (pessoa1 === pessoa2) {
    resultado = "Empate!";
} else if (
    (pessoa1 === "Tesoura" && pessoa2 === "Papel") ||
    (pessoa1 === "Papel" && pessoa2 === "Pedra") ||
    (pessoa1 === "Pedra" && pessoa2 === "Tesoura")
) {
    resultado = "Pessoa 1 venceu!";
} else {
    resultado = "Pessoa 2 venceu!";
}

// Mostra o resultado
alert(
    "Pessoa 1: " + pessoa1 +
    "\nPessoa 2: " + pessoa2 +
    "\nResultado: " + resultado
);