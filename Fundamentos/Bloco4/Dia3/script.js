//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
/*
let n = 5
let asterisco = "";
let symbol = "*"

for (let index = 1; index <= n; index++){
    asterisco = asterisco + "*";
}

for (let linha = 1; linha <= n; linha++){
    console.log(asterisco);
}
*/





//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
/*

for (let index = 1; index <= n; index++){
    asterisco = asterisco + "*";
    console.log(asterisco);
} */

//Agora inverta o lado do triângulo

let n = 5;
let colune = n;
let linha = "";

for (let l = 1; l <= n; l++) {
    for (let c = 1; c <=n; c++){
        if (c < colune){
            linha = linha + " ";
        }else{
            linha = linha + "*";
        }
    }
    console.log(linha);
        linha = "";
        colune -= 1;
}