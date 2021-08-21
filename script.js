'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('🚫 Please Enter a Number');
    document.querySelector('.guess').style.borderColor = 'red';
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
