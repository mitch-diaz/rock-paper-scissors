const player1Btn = document.getElementById('player1-rsp');
const player2Btn = document.getElementById('player2-rsp');
const reset = document.querySelector('.resetBtn');
const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';
const errorMsg = 'Something went wrong';
const rockPic = './images/rock-pic.jpeg';
const scissorsPic = './images/scissors-pic.jpg';
const paperPic = './images/paper-pic.jpg';
let firstPlayerChoice;
let secondPlayerChoice;


player1Btn.addEventListener('click', () => { 
  player1Btn.style.backgroundColor = '#e0e0e0';
  player1Btn.style.color = '#636363';
  player1RandomNumber();
}, {once: true});

player2Btn.addEventListener('click', () => { 
  player2Btn.style.backgroundColor = '#e0e0e0';
  player2Btn.style.color = '#636363';
  player2RandomNumber(); 
  postResultsToDOM(firstPlayerChoice, secondPlayerChoice);
}, {once: true});

reset.addEventListener('click', () => window.location.reload());


function player1RandomNumber() {
  let player1Choice = document.getElementById('player1-choice');

  const randomNum = Math.floor(Math.random() * 3 + 1);

  if (randomNum === 1) {
    firstPlayerChoice = rock;
    const image = document.createElement('img');
    image.setAttribute('src', rockPic);
    player1Choice.appendChild(image);
  } else if (randomNum === 2) {
    firstPlayerChoice = paper;
    const image = document.createElement('img');
    image.setAttribute('src', paperPic);
    player1Choice.appendChild(image);
  } else if (randomNum === 3) {
    firstPlayerChoice = scissors;
    const image = document.createElement('img');
    image.setAttribute('src', scissorsPic);
    player1Choice.appendChild(image);
  } else {
    console.log(errorMsg)
  }

  console.log('Player one:', randomNum, firstPlayerChoice);

  return firstPlayerChoice;
}


function player2RandomNumber() {
  let player2Choice = document.getElementById('player2-choice');

  const randomNum = Math.floor(Math.random() * 3 + 1);

  if (randomNum === 1) {
    secondPlayerChoice = rock;
    const image = document.createElement('img');
    image.setAttribute('src', rockPic);
    player2Choice.appendChild(image);
  } else if (randomNum === 2) {
    secondPlayerChoice = paper;
    const image = document.createElement('img');
    image.setAttribute('src', paperPic);
    player2Choice.appendChild(image);
  } else if (randomNum === 3) {
    secondPlayerChoice = scissors;
    const image = document.createElement('img');
    image.setAttribute('src', scissorsPic);
    player2Choice.appendChild(image);
  } else {
    console.log(errorMsg)
    return errorMsg
  }

  console.log('Player two:', randomNum, secondPlayerChoice)

  return secondPlayerChoice;
}

function postResultsToDOM(p1value, p2value) {

  let resultMsg = document.querySelector('.result-Msg');
  let changeMsgDivColor = document.querySelector('.result-Msg').style.backgroundColor = '#ffce35';
  let spanText = document.createElement('span');
  let player1Frame = document.querySelector('.player1-frame');
  let player2Frame = document.querySelector('.player2-frame');

  if (p1value === rock && p2value === scissors) {
      spanText = document.createElement('span');
      spanText.textContent = "Rock smashes scissors... Player 1 wins!";
      resultMsg.appendChild(spanText);
      player1Frame.style.backgroundColor = '#3FBF7F';
      player2Frame.style.backgroundColor = '#FF0000';
  } 
  if (p1value === scissors && p2value === paper) {
      spanText = document.createElement('span');
      spanText.textContent = "Scissors cut paper... Player 1 wins!";
      resultMsg.appendChild(spanText);
      player1Frame.style.backgroundColor = '#3FBF7F';
      player2Frame.style.backgroundColor = '#FF0000';
  } 
  if (p1value === paper && p2value === rock) {
    spanText = document.createElement('span');
    spanText.textContent = "Paper covers rock... Player 1 wins!";
    resultMsg.appendChild(spanText);
    player1Frame.style.backgroundColor = '#3FBF7F';
    player2Frame.style.backgroundColor = '#FF0000';
  } 
  if (p2value === rock && p1value === scissors) {
    spanText = document.createElement('span');
    spanText.textContent = "Rock smashes scissors... Player 2 wins!";
    resultMsg.appendChild(spanText);
    player1Frame.style.backgroundColor = '#FF0000';
    player2Frame.style.backgroundColor = '#3FBF7F';
  }
  if (p2value === scissors && p1value === paper) {
    spanText = document.createElement('span');
    spanText.textContent = "Scissors cut paper... Player 2 wins!";
    resultMsg.appendChild(spanText);
    player1Frame.style.backgroundColor = '#FF0000';
    player2Frame.style.backgroundColor = '#3FBF7F';
  }
  if (p2value === paper && p1value === rock) {
    spanText = document.createElement('span');
    spanText.textContent = "Paper covers rock... Player 2 wins!";
    resultMsg.appendChild(spanText);
    player1Frame.style.backgroundColor = '#FF0000';
    player2Frame.style.backgroundColor = '#3FBF7F';
  }
  if (p1value === p2value) {
    spanText = document.createElement('span');
    spanText.textContent = "It's a tie";
    resultMsg.appendChild(spanText);
    player1Frame.style.backgroundColor = '#F0F0F0';
    player2Frame.style.backgroundColor = '#F0F0F0';
  }
  else if (!p1value || !p2value) {
    spanText = document.createElement('span');
    spanText.textContent = `${errorMsg}`;
    resultMsg.appendChild(spanText);
  } 
}      
