console.log("Hello World!");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const cpuChoice = options[Math.floor(Math.random() * options.length)];
  return cpuChoice;
};

const getPlayerChoise = () => {
  const playerChoice = prompt("Rock, Paper, Scissors?");
  return playerChoice.toLowerCase();
};

const game = () => {
  let playerScore = 0;
  let cpuScore = 0;
  let tieCount = 0;

  const playRound = () => {
    const playerSelection = getPlayerChoise();
    const cpuSelection = getComputerChoice();

    if (playerSelection === cpuSelection) {
      console.log(`Both chose ${playerSelection}. It's a TIE!`);
      return tieCount++;
    } else if (
      (playerSelection === "paper" && cpuSelection === "rock") ||
      (playerSelection === "rock" && cpuSelection === "scissors") ||
      (playerSelection === "scissors" && cpuSelection === "paper")
    ) {
      console.log(`You WIN! ${playerSelection} beats ${cpuSelection}.`);
      return playerScore++;
    } else {
      console.log(`You LOSE! ${cpuSelection} beats ${playerSelection}.`);
      return cpuScore++;
    }
  };

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(
    `Score: You - ${playerScore}, Computer - ${cpuScore}, Tie - ${tieCount}`
  );
};
game();
