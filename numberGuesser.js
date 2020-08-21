let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = Math.round(Math.random() * 100);

const checkGuess = () => {
  let guessList = [];
  let userGuess = Number(prompt("Guess a number from 0-100: "));
  while (userGuess !== answer) {
    if (!isNaN(userGuess)) {
      if (!userGuess) {
        return;
      } else if (guessList.includes(userGuess)) {
        userGuess = Number(prompt("You already guessed that! Guess another number from 0-100: "));
      } else if (userGuess > answer) {
        console.log("Too high!");
        guessList.push(userGuess);
        userGuess = Number(prompt("Guess a number from 0-100: "));
      } else if (userGuess < answer) {
        console.log("Too low!");
        guessList.push(userGuess);
        userGuess = Number(prompt("Guess a number from 0-100: "));
      }
    } else {
      console.log(typeof(userGuess));
      userGuess = Number(prompt("That's not a number!: Guess a number from 0-100: "));
    }
  }
  console.log(`You got it! You took ${guessList.length} tries!`);
};


checkGuess();