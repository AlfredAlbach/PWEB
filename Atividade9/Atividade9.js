//1 Recebe três números e retorna o maior
function maiorNumero(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}


//2 Recebe três números e retorna em ordem crescente
function ordemCrescente(n1, n2, n3) {
    let numeros = [n1, n2, n3];

    numeros.sort((a, b) => a - b);
    return numeros;
}


//3 Verifica se uma palavra ou frase é palíndromo
function verificarPalindromo(texto) {
    

    let palavra = texto.toLowerCase().replaceAll(" ", "");

    let invertida = palavra.split("").reverse().join("");

    if (palavra === invertida) {
        return "É palíndromo";
    } else {
        return "Não é palíndromo";
    }
}


//4 Verifica se a segunda palavra está contida na primeira
function verificarSubconjunto(palavra1, palavra2) {
    
    
    if (palavra1 === undefined || palavra2 === undefined ||
        palavra1 === "" || palavra2 === "") {
        return "erro";
    }

    // Verifica se a segunda palavra está dentro da primeira
    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}


//5 Recebe uma data e retorna o dia da semana
function diaDaSemana(data) {
    let dias = [
        "Domingo", "Segunda-feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira",
        "Sábado"
    ];

    return dias[data.getDay()];
}





alert("1) Maior número: " + maiorNumero(10, 25, 25));

alert("2) Ordem crescente: " + ordemCrescente(30, 10, 20));

alert("3) Palíndromo: " + verificarPalindromo("ovo"));

alert("4) Subconjunto: " + verificarSubconjunto("programação", "programa"));

alert("5) Dia da semana: " + diaDaSemana(new Date()));




