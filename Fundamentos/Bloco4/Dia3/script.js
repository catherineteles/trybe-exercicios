//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let n = 10;
let resultadoMultiplicacao = n;

for (let fatorial = 1; fatorial < n; fatorial++){
resultadoMultiplicacao = resultadoMultiplicacao*fatorial;
}

console.log(resultadoMultiplicacao);
