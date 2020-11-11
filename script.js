// selectors
const dice = document.querySelector("#dice");
const player1 = document.querySelector("#player1");
const player1Current = document.querySelector("#player1Current");
const player2 = document.querySelector("#player2");
const player2Current = document.querySelector("#player2Current");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const newGame = document.querySelector("#newGame");
const player1arrow = document.querySelector(".player1arrow");
const player2arrow = document.querySelector(".player2arrow");
// global variables
const arrow = "&#8623;";
const diceBase = "&#9856";
let player1all = 0;
let player2all = 0;
let player1plus = 0;
let player2plus = 0;
let player = "player1";
let num;
let numDice = "";
// listen on roll
roll.addEventListener("click", () => {
  rollDice();
  dice.innerHTML = numDice;
  hold.disabled = false;
  if (player === "player1") {
    if (num === 1) {
      player1plus = 0;
      player1.innerHTML = player1plus;
      return (player = "player2");
    }
    arrowChanger("player1");
    player1plus += num;
    player1.innerHTML = player1plus;
  } else if (player === "player2") {
    if (num === 1) {
      player2plus = 0;
      player2.innerHTML = player2plus;
      return (player = "player1");
    }
    arrowChanger("player2");
    player2plus += num;
    player2.innerHTML = player2plus;
  }
});

hold.addEventListener("click", () => {
  if (player === "player1") {
    player1all += player1plus;
    player1Current.innerHTML = player1all;
    player = "player2";
    player1plus = 0;
    player1.innerHTML = player1plus;
    hold.disabled = true;
    if (player1all >= 100) {
      hold.disabled = true;
      roll.disabled = true;
      player1.innerHTML = "Winner";
      newGame.disabled = false;
    }
  } else if (player === "player2") {
    player2all += player2plus;
    player2Current.innerHTML = player2all;
    player = "player1";
    player2plus = 0;
    player2.innerHTML = player2plus;
    hold.disabled = true;
    if (player2all >= 100) {
      hold.disabled = true;
      roll.disabled = true;
      player2.innerHTML = "Winner";
      newGame.disabled = false;
    }
  }
});
newGame.addEventListener("click", () => {
  roll.disabled = false;
  player === "player1";
  player1all = 0;
  player2all = 0;
  player1plus = 0;
  player2plus = 0;
  player1.innerHTML = player1plus;
  player2.innerHTML = player2plus;
  player1Current.innerHTML = player1all;
  player2Current.innerHTML = player2all;
});
// roll a random number
function rollDice() {
  // generate a random number
  const rNumber = Math.floor(Math.random() * 6 + 1);
  // generate dice icon code for the random number
  const n = 9855 + rNumber;
  // add characters to the dice icon code to use in html
  numDice = "&#" + n;
  // return the icon
  num = rNumber;
}

function arrowChanger(player) {
  if (player === "player1") {
    player1arrow.innerHTML = arrow;
    player2arrow.innerHTML = "";
  } else if (player === "player2") {
    player1arrow.innerHTML = "";
    player2arrow.innerHTML = arrow;
  }
}
