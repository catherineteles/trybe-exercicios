//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "Tryber";
let invertida = "";
for (let index = word.length - 1 ; index >= 0; index--){
    invertida = invertida + word[index];
}

console.log(invertida);