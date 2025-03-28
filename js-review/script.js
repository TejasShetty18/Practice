const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const books = getBooks();
// books;

// const book = getBook(1);
// book

///Destructuring Object
/*
const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
console.log(title, author,  pages, publicationDate, genres, hasMovieAdaptation);

//Destructuring array and rest variable in array operator
const [primarygenre, secondaryGenre, ...otherGenre] = genres;
console.log(primarygenre, secondaryGenre, otherGenre)

// spread operator
const newgenre = [...genres, "ancbduc"];
newgenre

const updatedBook = {...book, moviePublicationdate: "2001-12-18", pages: 1210};
updatedBook;

//template literals using ``
const summary = `${title} is a certain pages like ${pages} page book`;
summary;


//ternary operator
const pageRange = pages > 1000 ? "over thousand" : "less then thousand";
pages
pageRange

const str = "2025-01-20";
///arrow function
const date = (str) => str.split("-")[0];

console.log(date(str))

//&& and || operator

//optional chanining using ?
function getTotalreviewcount(book){
  const totalGoodRead = book.reviews?.goodreads?.reviewsCount;
  const TotalLiberayThing = book.reviews?.librarything?.reviewsCount;
  return totalGoodRead + TotalLiberayThing;
}

console.log(getTotalreviewcount(book))
*/

//map
const books = getBooks();
const title = books.map((data) => data.title);
title;

// const essentials = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author
//   }
// });
//OR
const essentials = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentials;

//filter method
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterdValue = list.filter((data) => data % 2 == 0);
filterdValue;

const longBook = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBook;

//reduce method

//sort
const arr = [3,7,1,9,6];
const sort = arr.slice().sort((a, b) => a - b);
sort;
arr;

//immutable arrays;
//add without changing original
const newBook = {
  id: 6,
  title: "dfgbfg",
  publicationDate: "1996-08-01",
  author: "fvb",
  genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction", "dgffn"],
  hasMovieAdaptation: true,
  pages: 935,
  translations: {
    korean: "왕좌의 게임",
    polish: "Gra o tron",
    portuguese: "A Guerra dos Tronos",
    spanish: "Juego de tronos",
  },
  reviews: {
    goodreads: {
      rating: 4.44,
      ratingsCount: 2295233,
      reviewsCount: 59058,
    },
    librarything: {
      rating: 4.36,
      ratingsCount: 38358,
      reviewsCount: 1095,
    },
  },
};

const bookAfterAdded = [...books, newBook];
bookAfterAdded

///delete book from array
const deleteBook = bookAfterAdded.filter((book) => book.id !== 6);
deleteBook

///update book from array
const updateBook = deleteBook.map((book) => book.id === 1 ? {...book, pages: 10} : book);
updateBook;

//async function