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
const updateVendingTotal = (price) => {
  total += price;
  totalParagraph.textContent = `Total: $${total}.00`;
};

//make money

const coinForm = document.querySelector(".form");
const coinContainer = document.querySelector(".coin-container");

//light-bulb
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const lightBulb = document.querySelector(".light-bulb")
const lightButtons = document.querySelectorAll(".light-switch");

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
    newCoin.textContent = typeOfCoins;
    // if (typeOfCoins === penny) {
    //    newCoin.textContent = "Penny";
    // } else if (typeOfCoins === nickel) {
    //    newCoin.textContent = "Nickel";
    // } else if (typeOfCoins === dime) {
    //   newCoin.textContent = "Dime";
    // } else {
    // newCoin.textContent = "Quarter";
    // }
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    })
    coinContainer.append(newCoin);  
   
  }


});
 

//light bulb

onButton.addEventListener("click", () => {
  lightBulb.classList.add("light")
});

offButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "rgb(70, 70, 70)";
  lightBulb.style.color = "white";
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("light");
});

endButton.addEventListener("click", () => {
  lightBulb.remove();
  lightButtons.forEach((button) => {
    button.setAttribute("disabled", true);
  })
});

