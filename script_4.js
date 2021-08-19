const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Liste des entrepreneurs nées dans les années 1970:");
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979) {
    console.log(entrepreneur);
  };
});

console.log("Array avec le nom et prénom des entrepreneurs");
let arrayOfEntrepreneursNames = [];
entrepreneurs.forEach(entrepreneur => {
  arrayOfEntrepreneursNames.push(entrepreneur.first + " " + entrepreneur.last);
});
console.log(arrayOfEntrepreneursNames);

console.log("Quel age aurait chaque entrepreneur aujourd'hui");
entrepreneurs.forEach(entrepreneur => {
  age = 2021 - entrepreneur.year;
  console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} en 2021`);
});

console.log("Tri du tableau par nom de famille");
console.log(entrepreneurs.sort(function (a, b) {
  let nameA = a.last.toUpperCase(); // ignore upper and lowercase
  let nameB = b.last.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}));

