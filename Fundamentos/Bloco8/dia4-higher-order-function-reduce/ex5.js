const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    return array.reduce((acc, word) => {
        let wordLowerCase = word.toLowerCase();
        for (let index = 0; index < wordLowerCase.length; index +=1){
            if(wordLowerCase[index] === 'a'){
                acc += 1
            }
        }
        return acc;
    }, 0);
  }

  console.log(containsA(names));