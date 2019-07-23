function sortfunction(a, b) {
  return a - b; //faz com que o array seja ordenado numericamente e de ordem crescente.
}

export default function randomNumbers(totalToRandom, QtdNumbersToReturn) {
  let numeros = [];

  while (numeros.length < QtdNumbersToReturn) {
    const random = Math.floor(Math.random() * totalToRandom + 1);

    let verifica = true;

    for (let i in numeros) {
      if (numeros[i] === random) {
        verifica = false;
        break;
      }
    }

    if (verifica === true) {
      numeros.push(random);
    }
  }

  return numeros.sort(sortfunction);
}
