const startBtn = document.querySelector(".start_btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const newGameBtn = document.querySelector(".new_game");
const choseWeapon = document.getElementById("chose_weapon");
const roundNarrative = document.getElementById("round_narrative");
const scoreBoard = document.getElementById("score_board");
const cpuChoiceNarrative = document.getElementById("cpu_choice_narrative");

let playerChoice = "";
let cpuChoice = "";
let playerScore = 0;
let cpuScore = 0;
let tieCount = 0;
let roundCount = 0;

const startGame = () => {
  startBtn.classList.add("display_none");
  rockBtn.classList.remove("display_none");
  paperBtn.classList.remove("display_none");
  scissorsBtn.classList.remove("display_none");
  choseWeapon.classList.remove("display_none");

  getPlayerChoice();
};

const getPlayerChoice = () => {
  rockBtn.addEventListener("click", () => {
    playerChoice = "rock";
    getComputerChoice();
    playRound();
  });
  paperBtn.addEventListener("click", () => {
    playerChoice = "paper";
    getComputerChoice();
    playRound();
  });
  scissorsBtn.addEventListener("click", () => {
    playerChoice = "scissors";
    getComputerChoice();
    playRound();
  });
};

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  cpuChoice = options[Math.floor(Math.random() * options.length)];
};

const playRound = () => {
  if (roundCount === 5) {
    checkWinner();
    return;
  } else if (playerChoice === cpuChoice) {
    roundNarrative.innerText = `Both chose ${playerChoice}. It's a TIE!`;
    tieCount++;
  } else if (
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    roundNarrative.innerText = `You WIN! ${playerChoice} beats ${cpuChoice}.`;
    playerScore++;
  } else {
    roundNarrative.innerText = `You LOSE! ${cpuChoice} beats ${playerChoice}.`;
    cpuScore++;
  }

  cpuChoiceNarrative.innerText = `Computer chose: ${cpuChoice}`;
  scoreBoard.innerText = `Score: YOU - ${playerScore} | CPU - ${cpuScore} | TIE - ${tieCount}`;
  roundCount++;
  checkWinner();
};

const checkWinner = () => {
  if (roundCount === 5) {
    cpuChoiceNarrative.classList.add("display_none");
    newGameBtn.classList.remove("display_none");

    if (playerScore > cpuScore) {
      roundNarrative.innerText = `Congratulations! YOU WON!`;
      roundNarrative.style.color = "green";
    } else if (playerScore < cpuScore) {
      roundNarrative.innerText = `Sorry... You lost.`;
      roundNarrative.style.color = "red";
    } else if (playerScore === cpuScore) {
      roundNarrative.innerText = `It's a TIE`;
      roundNarrative.style.color = "yellow";
    }
  }
};

const reset = () => {
  playerScore = 0;
  cpuScore = 0;
  tieCount = 0;
  roundCount = 0;

  scoreBoard.innerText = `Score: YOU - 0 | CPU - 0 | TIE - 0`;
  newGameBtn.classList.add("display_none");
  roundNarrative.innerText = "";
  roundNarrative.style.color = "black";
  cpuChoiceNarrative.classList.remove("display_none");
};

startBtn.addEventListener("click", startGame);
newGameBtn.addEventListener("click", reset);
