'use strict';
/*console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(number);
const displayMessage = function () {};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number !';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too high' : 'Too low';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost !';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
