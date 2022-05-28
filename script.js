const selectionButtons = document.querySelectorAll('[data-selection]')



// User's Choice Function
const getUserChoice = userInput => {
  // userInput = userInput.toLowerCase();
// User's choices for game
  if (userInput.onclick === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Error! You must enter either rock, paper or scissors!');
  }
};

// Testing function 
// console.log(getUserChoice('Rock'));

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = selection.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})
// Computer's Choice Function
const getComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3));

  if (randomNumber === 0) {
    return 'rock';
  }
  else if (randomNumber === 1) {
    return 'paper';
  }
  else if (randomNumber === 2) {
    return 'scissors';
  }
}

// Testing function
//  console.log(getComputerChoice());


//  Function to determine a winner
const determineWinner = (userChoice, computerChoice) => {
  // Cheat code to always win, lol
  if (userChoice === 'bomb') {
    return 'You WON!'
  }
  // If game is Tied
  if (userChoice === computerChoice) {
    return 'It\'s a TIE!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer WINS!'
    } else {
      return 'You WON!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer WINS!'
    } else {
      return 'You WON!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer WINS!'
    } else {
    return 'You WON!'
   }
  } 
}

// Testing Function
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock'));


// Function to Start Game and Log results
const playGame = () => {
  // Must change *user choices* ONLY each try to get various results
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You choose: ' + userChoice);
  console.log('Computer choose: ' + computerChoice);
  // Determine who won
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();