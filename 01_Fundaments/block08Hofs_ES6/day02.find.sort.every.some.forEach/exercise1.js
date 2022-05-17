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
// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.
// Adicione o código do exercício aqui:
const authorBornIn1947 = (
  (yearOfBirth) =>
    books.find((element) =>
      element.author.birthYear === yearOfBirth).author.name
);


// console.log(authorBornIn1947(1947));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.
function smallerName() {
  let nameBook;
  books.forEach((element) => (
    (!nameBook || element.name.length < nameBook.length)
      ? nameBook = element.name
      : nameBook
  ));
  return nameBook;
}

// console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  const newObj = {};
  Object.entries(books.find((element) => element.name.length === 26))
  .sort()
  .forEach((element) => newObj[element[0]] = element[1])
  return newObj;
};

// console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const booksOrderedByReleaseYearDesc = () => (
  books.sort((a, b) => {
    if (a.releaseYear < b.releaseYear) return 1
    if (a.releaseYear > b.releaseYear) return -1
    return 0
  })
);

// console.log(booksOrderedByReleaseYearDesc());

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const everyoneWasBornOnSecXX = () => (
  books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000)
);

// console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = () => (
  books.some((book) => book.releaseYear > 1980 && book.releaseYear <= 1989)
);

// console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const authorUnique = () => (
//   books.every((element) => 
//     !books.some((book) => 
//       (element.author.birthYear === book.author.birthYear)
//       && (element.author.name !== book.author.name)
//     )
//   )
// );

const authorUnique = () => {
  const booksSortedByAuthorBirth = books.sort((a, b) => a - b);
  return booksSortedByAuthorBirth
  .every((book, index) => {
    if (booksSortedByAuthorBirth[index + 1]){
     return book.author.birthYear !== booksSortedByAuthorBirth[index + 1].author.birthYear;
    }
    return true;
  })
};

console.log(authorUnique());