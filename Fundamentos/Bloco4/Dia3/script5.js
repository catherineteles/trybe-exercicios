//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 7;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let linha = "";

for (let l = 0; l < meio; l++) {
    for (let c = 1; c <= n; c++){
    if (direita != n){
        if (c == esquerda || c == direita){
            linha = linha + "*";
        } else {
            linha = linha + " ";
        }
    }  
        if (direita == n){
            linha = linha + "*"
        }
    }
    
    console.log(linha);
        linha = "";
        direita += 1;
        esquerda -= 1;
}

