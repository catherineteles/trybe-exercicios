//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let n = 50;
let maiorPrimo = 0;

for (let numero = 0; numero <= n; numero++){
    let itsPrime = true;
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            itsPrime = false;
        }
    }
    if(itsPrime){
        maiorPrimo = numero;
    }
    
}
console.log(maiorPrimo);