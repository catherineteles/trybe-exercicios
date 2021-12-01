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

