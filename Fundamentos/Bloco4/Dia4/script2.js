//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo (palavra){
    let invertida = "";
    for (index = palavra.length -1 ; index >= 0; index--){
        invertida = invertida + palavra[index];
    }

    if (invertida == palavra){
        
        return console.log(true);
    }
    else{
    
        return console.log (false);
    }

}

palindromo("arara");
palindromo("desenvolvimento");
