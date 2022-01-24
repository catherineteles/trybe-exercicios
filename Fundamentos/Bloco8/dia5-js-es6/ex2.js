//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...arg) => arg.reduce((agg, current) => agg + current );

console.log(sum(1,4,5,6,7,9));