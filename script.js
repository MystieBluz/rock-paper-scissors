// Variables for display and all the game buttons
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('result');
const gameBtns = document.querySelectorAll('button');

// Player and Computer variable
let playerChoice;
let computerChoice;

// Function for game buttons
gameBtns.forEach(gameBtns => gameBtns.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerDisplay.innerHTML = playerChoice;
  generateComputerChoice()
}))

const generateComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3)); // replace 3 with: gameBtns.length as another option
  // console.log(randomNumber)

  if (randomNumber === 0) {
    computerChoice = 'Rock';
  }
  else if (randomNumber === 1) {
    computerChoice = 'Paper';
  }
  else if (randomNumber === 2) {
    computerChoice = 'Scissors';
  }
  computerDisplay.innerHTML = computerChoice
}