function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  //referência no .sort() https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958

  function sortOddsAndEvens(array){
      const odds = [];
      const evens = [];
      for(let index=0; index < array.length; index +=1){
          if(array[index] % 2 === 0){
              evens.push(array[index]);
          } else{
              odds.push(array[index]);
          }
      }
      return `${odds.sort((a,b)=>(a-b))},${evens.sort((a,b)=>(a-b))}`;
  }

  console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉