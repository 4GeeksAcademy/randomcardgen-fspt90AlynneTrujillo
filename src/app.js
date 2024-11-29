/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const values = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["♦", "♥", "♠", "♣"];

const suitClasses = {
  "♦": "suit-diamonds",
  "♥": "suit-hearts",
  "♠": "suit-spades",
  "♣": "suit-clubs"
};

window.onload = function() {
  //write your code here

  let randomValues = Math.floor(Math.random() * values.length);
  let randomSuits = Math.floor(Math.random() * suits.length);

  let finalRandomValues = values[randomValues];
  let finalRandomSuits = suits[randomSuits];

  let finalCard = document.getElementById("card");
  finalCard.textContent = `${finalRandomValues}`;
  finalCard.classList.add(values[finalRandomValues]);
  finalCard.classList.add(suitClasses[finalRandomSuits]);

  if (finalRandomSuits === "♦" || finalRandomSuits === "♠") {
    finalCard.style.color = "red";
  } else {
    finalCard.style.color = "black";
  }
  console.log("Hello Rigo from the console!");
};
