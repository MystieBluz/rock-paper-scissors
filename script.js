// Variables for display in browser and all the game buttons
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('result');
const gameBtns = document.querySelectorAll('button');

// Player, Computer and Results variable
let playerChoice;
let computerChoice;
let gameChoice;

// Function for game buttons
gameBtns.forEach(gameBtns => gameBtns.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerDisplay.innerHTML = playerChoice;
  generateComputerChoice()
  determineWinner()
}))

const generateComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3)); // replace 3 with: gameBtns.length as another option
  // console.log(randomNumber)

  if (randomNumber === 0) {
    computerChoice = 'Rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper';
  }
  if (randomNumber === 1) {
    computerChoice = 'Scissors';
  }
  computerDisplay.innerHTML = computerChoice;
}

// Function to determine a winner
const determineWinner = () => {
  // If game is Tied
  if (computerChoice === playerChoice) {
    gameChoice = 'It\'s a TIE!'
  }
  // Remainder of computer and player choices
  else if (computerChoice === 'Rock' && playerChoice === 'Paper'){
    gameChoice = 'You WON! :)'
  }
  else if (computerChoice === 'Rock' && playerChoice === 'Scissors'){
    gameChoice = 'Computer WINS! :('
  }
  else if (computerChoice === 'Paper' && playerChoice === 'Rock'){
    gameChoice = 'Computer WINS! :('
  }
  else if (computerChoice === 'Paper' && playerChoice === 'Scissors'){
    gameChoice = 'You WON! :)'
  }
  else if (computerChoice === 'Scissors' && playerChoice === 'Paper'){
    gameChoice = 'Computer Wins! :('
  }
  else if (computerChoice === 'Scissors' && playerChoice === 'Rock'){
    gameChoice = 'You WON! :)'
  }
  else if (playerChoice === 'Bomb') {
    gameChoice = 'YOU WON! :P'
  }
  resultDisplay.innerHTML = gameChoice;
}