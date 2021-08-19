
function factorielle(nb) {
  let result = nb;
  for (let count = 1; count < nb; count++) {
    result = result * (nb - count);
  };
  console.log(`La factorielle de ${nb} est: ${result}`);
  return result;
};

let number = Number(prompt("Donner un nombre pour avoir sa factorielle :"));
console.log(factorielle(number));