const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = (object) => object.author.birthYear === 1947;
const authorName = books.find(authorBornIn1947).author['name'];

console.log(authorName);

//Retorne o nome do livro de menor nome.

function smallerName(array) {
    let nameBook = array[0].name;
    array.forEach((element) => {
        let title = element['name']
        if(title.length < nameBook.length){
            nameBook = title;
        }
    });
  
    return nameBook;
  }

console.log(smallerName(books));

// Encontre o primeiro livro cujo nome possui 26 caracteres.

const findBook = (object) => object.name.length === 26;
const bookFound = books.find(findBook);
console.log(bookFound);

//Ordene os livros por data de lançamento em ordem decrescente.

const arrayOrdenando = books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
console.log(arrayOrdenando);

//Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
// Seculo XX = 1901-2000

const expectedResult = false;

const everyoneWasBornOnSecXX = (array) => array.every((object) => object.author['birthYear'] > 1901);

console.log(everyoneWasBornOnSecXX(books));

//Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.