//Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let linha = "";

for (let l = 0; l <= meio; l++) {
    for (let c = 0; c <=  n; c++){
        if (c > esquerda && c < direita){
            linha = linha + "*";
        } else {
            linha = linha + " ";
        }
    }
    console.log(linha);
        linha = "";
        direita += 1;
        esquerda -= 1;
}

