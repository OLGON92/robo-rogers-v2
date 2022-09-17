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
    } else if (element.includes("2")) {
      newArray.push("Boop!");
    } else if (element.includes("1")) {
      newArray.push("Beep!");
    } else {
      newArray.push(element);
    }
  });
  return newArray.join(", ");
};



//User Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const userNumber = document.getElementById("input-number").value;
  const newArray = roboResponse(createArray(userNumber));
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = newArray;
  outputDiv.removeAttribute("class");
}
window.addEventListener("load", function() {
	document.querySelector("form#input-form").addEventListener("submit", handleFormSubmission);
});
