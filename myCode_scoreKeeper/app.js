const playerOneScore = document.querySelector("#player-one-score");
const playerTwoScore = document.querySelector("#player-two-score");
const playerOneBtn = document.querySelector("#player-one-btn");
const playerTwoBtn = document.querySelector("#player-two-btn");
const gameset = document.querySelector("#gamesetScore");
const resetBtn = document.querySelector("#resetScore");
let isGameOver = false;
let gameEndScore = 3;
let firstScore = 0;
let secondScore = 0;

playerOneBtn.addEventListener("click", () => {
  if (!isGameOver) {
    firstScore++;
    playerOneScore.textContent = `${firstScore}`;
    if (gameEndScore === firstScore) {
      playerOneScore.style.color = "green";
      playerTwoScore.style.color = "red";
      isGameOver = true;
      btnDisabled(isGameOver);
    }
  }
});
playerTwoBtn.addEventListener("click", () => {
  if (!isGameOver) {
    secondScore++;
    playerTwoScore.textContent = `${secondScore}`;
    if (gameEndScore === secondScore) {
      playerTwoScore.style.color = "green";
      playerOneScore.style.color = "red";
      isGameOver = true;
      btnDisabled(isGameOver);
    }
  }
});

resetBtn.addEventListener("click", () => {
  reset();
});

gameset.addEventListener("change", () => {
  gameEndScore = parseInt(gameset.value);
  reset();
});

const btnDisabled = (gameover) => {
  if (gameover) {
    playerTwoBtn.disabled = true;
    playerOneBtn.disabled = true;
  } else {
    playerTwoBtn.disabled = false;
    playerOneBtn.disabled = false;
  }
};

const reset = () => {
  firstScore = secondScore = 0;
  playerOneScore.textContent = playerTwoScore.textContent = "0";
  playerOneScore.style.color = playerTwoScore.style.color = "black";
  isGameOver = false;
  btnDisabled(isGameOver);
};
