//Business Logic

function createArray(input) {
  let numberArray= []
  const maxNumber = parseInt(input);
    for (let i = 0; i <= maxNumber; i +=1) {
      numberArray.push(i.toString());
    }
    return numberArray;
}