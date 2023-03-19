const player1Btn = document.getElementById('player1-rsp');
const player2Btn = document.getElementById('player2-rsp');
const player1Choice = document.getElementById('player1-choice');
const player2Choice = document.getElementById('player2-choice');
const player1Frame = document.getElementById('player1-frame');
const player2Frame = document.getElementById('player2-frame');
const reset = document.querySelector('.resetBtn');

const rockWin = './images/rock-win.jpeg';
const rockLose = './images/rock-lose.jpg';
const scissorsPic = './images/scissors-pic.jpg';
const paperWin = './images/paper-win.jpg';
const paperLose = './images/paper-lose.jpg';


const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';
const errorMsg = 'Something went wrong';

let firstPlayerChoice;
let secondPlayerChoice;

const firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
const secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
const thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
const fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
const fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
const sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
const seventhPossibility = firstPlayerChoice === secondPlayerChoice;


player1Btn.addEventListener('click', () => {
  const player1 = document.querySelector('.player1-choice')
  player1RandomNumber();
}, {once: true})

player2Btn.addEventListener('click', () => {
  const player2 = document.querySelector('.player2-choice')
  player2RandomNumber();
}, {once: true})


// Random Number rock-scissors-paper result
function player1RandomNumber() {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  // console.log('randomNum', randomNum)

  if (randomNum === 1) {
    firstPlayerChoice = 'rock';
  } else if (randomNum === 2) {
    firstPlayerChoice = 'paper';
  } else if (randomNum === 3) {
    firstPlayerChoice = 'scissors';
  } else {
    console.log(errorMsg)
    return errorMsg
  }

  console.log('Player one:', firstPlayerChoice)

  return firstPlayerChoice;
}


function player2RandomNumber() {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  // console.log('randomNum', randomNum)

  if (randomNum === 1) {
    secondPlayerChoice = 'rock';
  } else if (randomNum === 2) {
    secondPlayerChoice = 'paper';
  } else if (randomNum === 3) {
    secondPlayerChoice = 'scissors';
  } else {
    console.log(errorMsg)
    return errorMsg
  }

  console.log('Player two:', secondPlayerChoice)

  return secondPlayerChoice;
}


// Link number to image
function compareResults() {

  
  
  // const player1Choice = document.getElementById('player1-choice');
  // const image = document.createElement('img');
  // image.setAttribute('src', scissors);
  // player1Choice.appendChild(image);

}





reset.addEventListener('click', () => window.location.reload());