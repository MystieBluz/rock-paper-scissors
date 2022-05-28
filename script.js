// Variables for display in browser and all the game buttons
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('result');
const gameBtns = document.querySelectorAll('button');

// Player, Computer and Results variable
let playerChoice;
let computerChoice;
let gameResults;

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
  computerDisplay.innerHTML = computerChoice;
}

// Function to determine a winner
const determineWinner = (playerChoice, computerChoice) => {
  // Cheat code to always win, lol
  if (playerChoice === 'bomb') {
    gameResults = 'You WON!'
  }
  // If game is Tied
  if (playerChoice === computerChoice) {
    gameResults = 'It\'s a TIE!'
  }
  if (playerChoice === 'rock') {
    if (computerChoice === 'paper'){
      gameResults = 'Computer WINS!'
    } else {
      gameResults = 'You WON!'
    }
  }
  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      gameResults = 'Computer WINS!'
    } else {
      gameResults = 'You WON!'
    }
  }
  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      gameResults = 'Computer WINS!'
    } else {
      gameResults = 'You WON!'
   }
  } 
  resultDisplay.innerHTML = gameResults;
}