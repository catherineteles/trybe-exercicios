//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTeste = [2, 3, 6, 7, 10, 1]

function maiorIndice(array){
    let maiorIndex = 0
    for (let index in array){
        if(array[index] > array[maiorIndex]){
            maiorIndex = index;
        }

    }
    return maiorIndex;
}

console.log(maiorIndice(arrayTeste))