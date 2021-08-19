const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function isAllRented() {
  let bool = true;
  books.forEach(book => {
    if (book.rented <= 0) {
      bool = false;
    }
  });
  return bool;
}

function mostRented() {
  let topBook = books[0];
  books.forEach(book => {
    if (book.rented > topBook.rented) {
      topBook = book;
    }
  });
  return topBook;
}

function lessRented() {
  let botBook = books[0];
  books.forEach(book => {
    if (book.rented < botBook.rented) {
      botBook = book;
    }
  });
  return botBook;
}



console.log("Est-ce que tout les livres ont étés empruntés au moins une fois ?");
console.log(isAllRented());

console.log("Quel est le livre le plus emprunté ?");
console.log(mostRented());

console.log("Quel est le livre le moins emprunté ?");
console.log(lessRented());

console.log("Livre id 873495 ?");
let idBook = books.find(element => element.id === 873495);
console.log(idBook);

console.log("Suppression du livre avec l'id 133712");
let indexBook = books.findIndex(element => element.id === 133712);
books.splice(indexBook, 1);
console.log(books);

console.log("Tri du tableau par titre");
console.log(books.sort(function (a, b) {
  let nameA = a.title.toUpperCase(); // ignore upper and lowercase
  let nameB = b.title.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}));