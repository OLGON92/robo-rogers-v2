//Business Logic

function createArray(input) {
  let numberArray= []
  const maxNumber = parseInt(input);
    for (let i = 0; i <= maxNumber; i +=1) {
      numberArray.push(i.toString());
    }
    return numberArray;
}
function roboResponse(numberArray) {
  let newArray = []
  numberArray.forEach(function(element) {
    if (element.includes("3")) {
      newArray.push("Won't you be my neighbor?");
    } else if(element.includes("2")) {
      newArray.push("Boop!");
    } else {
      newArray.push(element);
    }
  });
  return newArray.join(", ");
};