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

