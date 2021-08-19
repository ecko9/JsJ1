
function pyramide(etage) {
  let spaceChar = " ";
  let hashtagChar = "#";
  for (let count = 1; count <= etage; count++) {
    console.log(spaceChar.repeat(etage - count) + hashtagChar.repeat(count));
  };
  return true
};

let number = Number(prompt("Donner un nombre d'étages à la pyramide:"));
console.log(pyramide(number));