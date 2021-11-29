let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os números no console.log()

    for (let number of numbers){
        console.log(number);
    }
//Some todos os números do array
let sum = 0;

for (let x of numbers){
    sum += x;
}

console.log(sum);

//Calcule e imprima a média aritmétrica dos números

let media = sum/numbers.length;
console.log(media);

//Se media>20 imprimir "Média maior que 20"

if(media > 20){
    console.log("Média maior que 20");
}
else{
    console.log("Média menor que 20");
}
//Utilizando for descubra qual o maior número do array
let higherNumber = numbers[0]
for (var index = 1; index < numbers.length; index++){
    if (higherNumber < numbers[index]){
        higherNumber = numbers[index]
    }
}
console.log(higherNumber);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let numerosImpares = 0
for (var index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 != 0){
        numerosImpares++;
    }
}

if (numerosImpares != 0){
    console.log(numerosImpares);
}
else{
    console.log("Não Existem Números Ímpares");
}
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];
for (var index = 0; index < numbers.length; index++){
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let novoArray = [];

for (let numero = 1; numero <= 25; numero++){
    novoArray.push(numero);
}

console.log(novoArray);