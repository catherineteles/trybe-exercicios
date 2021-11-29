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

console.log(sum / numbers.length);
