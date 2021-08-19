let adnChain = String(prompt("Veuillez entrer une chaine ADN (multiple de 3):"));

let codonArray = [];
let miniString = "";

for (let count = 0; count < adnChain.length; count++) {
  if (count !== 0 && count % 3 === 0) {
    codonArray.push(miniString);
    miniString = "";
  }
  miniString += adnChain[count];
};

console.log(codonArray);

let acideAmineArray = [];

codonArray.forEach(codon => {
  switch (codon) {
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
    case 'AGU':
    case 'AGC':
      acideAmineArray.push("Sérine");
      break;

    case 'CCC':
    case 'CCU':
    case 'CCA':
    case 'CCG':
      acideAmineArray.push("Proline");
      break;

    case 'UUA':
    case 'UUG':
      acideAmineArray.push("Leucine");
      break;

    case 'UUU':
    case 'UUC':
      acideAmineArray.push("Phénylalanine");
      break;


    case 'CGU':
    case 'CGC':
    case 'CGA':
    case 'CGG':
    case 'AGA':
    case 'AGG':
      acideAmineArray.push("Arginine");
      break;


    case 'UAU':
    case 'UAC':
      acideAmineArray.push("Tyrosine");
      break;

    default:
      console.log('ERROR');
  }
});

console.log(acideAmineArray.join('-'));
