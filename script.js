"use strict";
//Variables of te game
let currentScore = 0;
let activePlayer = 0;
let start = false;
let controlNum1 = 0;

const scores = [0, 0];
const WIN_SCORE = 10;
let winGame = false;

//Selecting section
const sections = document.querySelectorAll(".player");

//Selecting Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnStart = document.querySelector(".btn--start");

//Selecting the dice
const diceEl = document.querySelector(".dice");

//Selecting modal elements
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const inPlayers = document.querySelectorAll(".player--name");
const errorsEl = document.querySelectorAll(".error");

//------------------------------------------------//
//--------- Rolling dice Functionality -----------//
//------------------------------------------------//

btnRoll.addEventListener("click", function () {
  //Only if there isn't a winnner
  if (!winGame) {
    // 1. Generating a random dice roll
    let secretDice = Math.trunc(Math.random() * 6) + 1;
    if (secretDice === 1) {
      controlNum1 = controlNum1 + 1;
      if (controlNum1 === 2) {
        while (controlNum1 === 2) {
          secretDice = Math.trunc(Math.random() * 6) + 1;
          if (secretDice !== 1) {
            controlNum1 = 0;
          }
        }
      }
    } else {
      controlNum1 = 0;
    }

    // 2. Display dice
    diceEl.classList.remove("hidden");

    //2.1. set the animation of dice
    if (secretDice !== 1) {
      diceEl.src = `dicePhoto/dice-${secretDice}.png`;
      diceEl.classList.add("dice--animation");
      document.querySelector(".dice--animation").style.borderColor = "#333";
      setTimeout(function () {
        diceEl.classList.remove("dice--animation");
      }, 200);
    } else {
      diceEl.src = `dicePhoto/dice-${secretDice}.png`;
      diceEl.classList.add("dice--animation");
      document.querySelector(".dice--animation").style.borderColor = "#c7365f";
      setTimeout(function () {
        diceEl.classList.remove("dice--animation");
      }, 200);
    }

    // 3. check for rolled 1: if is true switch to next palyer

    if (secretDice !== 1) {
      currentScore = currentScore + secretDice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      //Switch player
      activePlayer = activePlayer === 0 ? 1 : 0;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    }
  }
});

//------------------------------------------------//
//--------- New Game functionality ---------------//
//------------------------------------------------//

btnNew.addEventListener("click", function () {
  //1. set the control of num 1   for no num 1  at first roll
  controlNum1 = 1;
  // 1.1. Reset the current score
  currentScore = 0;
  //1.2. Reset the win control
  if (winGame) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    winGame = false;
  }
  //1.3. reset the scores of two players
  scores[0] = 0;
  scores[1] = 0;
  document.querySelector(`#score--${0}`).textContent = scores[0];
  document.querySelector(`#score--${1}`).textContent = scores[1];

  // 2. Remove the dice
  diceEl.classList.add("hidden");

  // 3. Construct the initial situation
  if (activePlayer === 0) {
    //The best case: only reset current
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //The worst case: 1)reset current
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;

    //2)remove active player
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    //3) reset active player
    activePlayer = 0;

    //4)add active player
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
  }

  //4. View the form
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");

  // 5. Control the starter situation ONLY THE FIRST TIME
  if (!start) {
    start = true;
    console.log("iniziamo");
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove("hidden");
    }
    btnRoll.classList.remove("hidden");
    btnHold.classList.remove("hidden");
  }
});

//------------------------------------------------//
//--------- Start Functionality ------------------//
//------------------------------------------------//

btnStart.addEventListener("click", function () {
  let control = true;

  // 1. Control the name player input
  for (let j = 0; j < inPlayers.length; j++) {
    errorsEl[j].textContent = "";
    if (!inPlayers[j].value) {
      errorsEl[j].textContent = `The field cannot be empty`;
      control = false;
    } else if (
      inPlayers[j].value.includes("1") ||
      inPlayers[j].value.includes("2") ||
      inPlayers[j].value.includes("3") ||
      inPlayers[j].value.includes("4") ||
      inPlayers[j].value.includes("5") ||
      inPlayers[j].value.includes("6") ||
      inPlayers[j].value.includes("7") ||
      inPlayers[j].value.includes("8") ||
      inPlayers[j].value.includes("9") ||
      inPlayers[j].value.includes("0")
    ) {
      errorsEl[j].textContent = `The field must contain olnly letter`;
      control = false;
    } else if (
      inPlayers[j].value.length < 2 ||
      inPlayers[j].value.length > 10
    ) {
      errorsEl[j].textContent = `The field must contain 2 to 10 characters`;
      control = false;
    }
  }

  //2. Start the game if control is OK
  if (control) {
    console.log("entro");
    modalEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
    document.querySelector("#name--0").textContent = inPlayers[0].value;
    document.querySelector("#name--1").textContent = inPlayers[1].value;

    // 2.1. Reset the form
    inPlayers[0].value = "";
    inPlayers[1].value = "";
  }
});

//------------------------------------------------//
//--------- Hold Functionality -------------------//
//------------------------------------------------//

btnHold.addEventListener("click", function () {
  //1. set the control of num 1   for no num 1  at first roll
  controlNum1 = 1;
  //2. Save the score only if different from 0
  if (currentScore !== 0 && !winGame) {
    // 2.1. Remove the dice
    diceEl.classList.add("hidden");
    // 2.2. Update the score
    scores[activePlayer] += currentScore;

    if (scores[activePlayer] === WIN_SCORE) {
      //change the win control
      winGame = true;
      //Reset the current score
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent = "WIN!";

      //reset the scores for all player
      scores[1] = 0;
      scores[0] = 0;
      //Change style of the winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else if (scores[activePlayer] > WIN_SCORE) {
      //Decrase the score with the overflow
      scores[activePlayer] =
        scores[activePlayer] - (scores[activePlayer] - WIN_SCORE) * 2;
      //Reset the current score
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      //Switch player
      activePlayer = activePlayer === 0 ? 1 : 0;
      console.log(activePlayer);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      //Reset the current score
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      //Switch player
      activePlayer = activePlayer === 0 ? 1 : 0;
      console.log(activePlayer);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    }
  }
});
