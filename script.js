const player1Btn = document.getElementById('player1-rsp');
const player2Btn = document.getElementById('player2-rsp');
const reset = document.querySelector('.resetBtn');

const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';
const errorMsg = 'Something went wrong';

const rockWin = './images/rock-win.jpeg';
const scissorsPic = './images/scissors-pic.jpg';
const paperWin = './images/paper-win.jpg';
const tie = './images/tie-icon-15544.png'

// let firstPlayerChoice;
// let secondPlayerChoice;

// const firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
// const secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
// const thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
// const fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
// const fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
// const sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
// const seventhPossibility = firstPlayerChoice === secondPlayerChoice;


player1Btn.addEventListener('click', () => { 
  player1Btn.style.backgroundColor = '#e0e0e0';
  player1Btn.style.color = '#636363';
  player1RandomNumber();
}, {once: true});

player2Btn.addEventListener('click', () => { 
  player2Btn.style.backgroundColor = '#e0e0e0';
  player2Btn.style.color = '#636363';
  player2RandomNumber(); 
}, {once: true});

reset.addEventListener('click', () => window.location.reload());

// Random Number rock-scissors-paper result
function player1RandomNumber() {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  let firstPlayerChoice;

  if (randomNum === 1) {
    firstPlayerChoice = rock;
    const player1Choice = document.getElementById('player1-choice');
    const image = document.createElement('img');
    image.setAttribute('src', rockWin);
    player1Choice.appendChild(image);
  } else if (randomNum === 2) {
    firstPlayerChoice = paper;
    const player1Choice = document.getElementById('player1-choice');
    const image = document.createElement('img');
    image.setAttribute('src', paperWin);
    player1Choice.appendChild(image);
  } else if (randomNum === 3) {
    firstPlayerChoice = scissors;
    const player1Choice = document.getElementById('player1-choice');
    const image = document.createElement('img');
    image.setAttribute('src', scissorsPic);
    player1Choice.appendChild(image);
  } else {
    console.log(errorMsg)
  }

  console.log('Player one:', firstPlayerChoice)

  return firstPlayerChoice;
}


function player2RandomNumber() {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  let secondPlayerChoice;

  if (randomNum === 1) {
    secondPlayerChoice = rock;
    const player2Choice = document.getElementById('player2-choice');
    const image = document.createElement('img');
    image.setAttribute('src', rockWin);
    player2Choice.appendChild(image);
  } else if (randomNum === 2) {
    secondPlayerChoice = paper;
    const player2Choice = document.getElementById('player2-choice');
    const image = document.createElement('img');
    image.setAttribute('src', paperWin);
    player2Choice.appendChild(image);
  } else if (randomNum === 3) {
    secondPlayerChoice = scissors;
    const player2Choice = document.getElementById('player2-choice');
    const image = document.createElement('img');
    image.setAttribute('src', scissorsPic);
    player2Choice.appendChild(image);
  } else {
    console.log(errorMsg)
    return errorMsg
  }

  console.log('Player two:', secondPlayerChoice)

  return secondPlayerChoice;
}


// Link number to image
function getResults(p1value, p2value) {

  let resultMsg = document.querySelector('.result-Msg');
  let spanText = document.createElement('span');
  let player1Frame = document.querySelector('.player1-frame');
  let player2Frame = document.querySelector('.player2-frame');

  const firstPossibility = p1value === rock && p2value === scissors;
  const secondPossibility = p1value === scissors && p2value === paper;
  const thirdPossibility = p1value === paper && p2value === rock;
  const fourthPossibility = p2value === rock && p1value === scissors;
  const fifthPossibility = p2value === scissors && p1value === paper;
  const sixthPossibility = p2value === paper && p1value === rock;
  const seventhPossibility = p1value === p2value;

  let possiblities = firstPossibility || secondPossibility || thirdPossibility || fourthPossibility || fifthPossibility || sixthPossibility || seventhPossibility;

  switch (possiblities) {
    case firstPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = "Rock smashes scissors... Player 1 wins!";
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#3FBF7F';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#FF0000';
      break;
    case secondPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = "Scissors cut paper... Player 1 wins!";
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#3FBF7F';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#FF0000';
      break;
    case thirdPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = "Paper covers rock... Player 1 wins!";
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#3FBF7F';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#FF0000';
      break;
    case fourthPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = "Rock smashes scissors... Player 2 wins!";
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#FF0000';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#3FBF7F';
      break;
    case fifthPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = "Scissors cut paper... Player 2 wins!";
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#FF0000';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#3FBF7F';
      break;
    case sixthPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = "Paper covers rock... Player 2 wins!";
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#FF0000';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#3FBF7F';
      break;
    case seventhPossibility:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = `It's a tie - Player 1: ${firstPlayerChoice}, Player 1: ${secondPlayerChoice}`;
      resultMsg.appendChild(spanText);
      player1Frame = document.querySelector('.player1-frame');
      player1Frame.style.backgroundColor = '#3FBF7F';
      player2Frame = document.querySelector('.player2-frame');
      player2Frame.style.backgroundColor = '#FF0000';
      break;
    default:
      resultMsg = document.querySelector('.result-Msg');
      spanText = document.createElement('span');
      spanText.textContent = `${errorMsg}`;
      resultMsg.appendChild(spanText);

    }
      
}

