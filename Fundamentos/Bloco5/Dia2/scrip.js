//Acesse o elemento elementoOndeVoceEsta
document.getElementById('elementoOndeVoceEsta');
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "red";
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById('primeiroFilhoDoFilho').innerText = 'Utilizar innerText para fazer adição de textos!'
//Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').firstChild;
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextSibling;
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
//Agora acesse o terceiroFilho a partir de pai .
document.getElementById('pai').lastElementChild.previousElementSibling;
//Parte II
//Crie um irmão para elementoOndeVoceEsta .
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
let pai = document.getElementById('pai');
pai.appendChild(irmaoElementoOndeVoceEsta);
//Crie um filho para elementoOndeVoceEsta .
let elemento = document.getElementById("elementoOndeVoceEsta");
let filho = document.createElement('section');
filho.id = "filhoElementoOndeVoceEsta";
elemento.appendChild(filho);
//Crie um filho para primeiroFilhoDoFilho .
let filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let filhoPrimeiro = document.createElement('section');
filhoPrimeiro.id = "filhoDoPrimeiroFilhoDoFilho";
filhoDoFilho.appendChild(filhoPrimeiro);
//A partir desse filho criado, acesse terceiroFilho 
filhoPrimeiro.parentElement.parentElement.nextElementSibling

//Parte III
//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
for (let index = 0; index < pai.childNodes.length; index++){
    let child = pai.childNodes[index]
    if (child.id !== 'elementoOndeVoceEsta'){
        child.removeChild();
    }
}
