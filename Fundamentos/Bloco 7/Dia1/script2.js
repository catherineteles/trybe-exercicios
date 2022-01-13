//Crie uma função que receba um número e retorne seu fatorial.
const calcularFatorial = (numero) => {
    let fatorial = 1
    if(numero === 0){
        return fatorial;
    } else {
        for(let index = 1; index <= numero; index += 1){
            fatorial = fatorial*index;
        }
        return fatorial;
    }   
}

console.log(calcularFatorial(5));

//Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (string) => {
    let arrayPalavras = string.split(" ");
    
}