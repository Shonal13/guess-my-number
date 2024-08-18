'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage(`🛑 Enter a Valid Number !`);

    // When number is guessed correctly
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number !`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        `${guess > secretNumber ? `👇🏾 Guess Lower` : `☝🏾 Guess Higher`}`
      );

      score--;
      document.querySelector(`.score`).textContent = score;
    }
  }
});

// Game reset functionality

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.number`).textContent = `?`;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`.guess`).value = '';
  score = 20;
  document.querySelector(`.score`).textContent = score;
  displayMessage(`Start Guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
