"use strict";
//vending machine
// selectors
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
let total = 0;

console.dir(totalParagraph);

//make money

const coinForm = document.querySelector(".form");
const coinContainer = document.querySelector(".coin-container");


colaButton.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}.00`;
});
peanutsButton.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});
chocolateButton.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});
gummiesButton.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});

//2. Make Money

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const howManyInput = document.querySelector("#numberInput").value;
  const typeOfCoins = document.querySelector("#coins").value;
  const penny = document.querySelector(".penny").value;
  const nickel = document.querySelector(".nickel").value;
  const dime = document.querySelector(".dime").value;
  const quarter = document.querySelector(".quarter").value;


  // console.dir(howManyInput);
  // console.dir(typeOfCoins);
  for (let i = 0; i < howManyInput; i++) {
    // console.log(i);
    const newCoin = document.createElement("div");
    newCoin.classList.add(typeOfCoins, "coin");
    if (typeOfCoins === penny) {
       newCoin.textContent = "Penny";
    } else if (typeOfCoins === nickel) {
       newCoin.textContent = "Nickel";
    } else if (typeOfCoins === dime) {
      newCoin.textContent = "Dime";
    } else {
    newCoin.textContent = "Quarter";
    }
    coinContainer.append(newCoin);  
   
  }


});
 


