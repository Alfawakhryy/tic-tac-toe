const cells = document.querySelectorAll(".cell");
const restartButton = document.querySelector(".restart-button");
let currentPlayer = "x";

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].classList.contains(currentPlayer) &&
      cells[b].classList.contains(currentPlayer) &&
      cells[c].classList.contains(currentPlayer)
    ) {
      return true;
    }
  }

  return false;
}

function handleClick(event) {
  const cell = event.target;

  if (cell.classList.contains("x") || cell.classList.contains("o")) {
    return;
  }

  cell.classList.add(currentPlayer);
  cell.textContent = currentPlayer.toUpperCase();

  if (checkWinner()) {
    setTimeout(() => {
      alert(`${currentPlayer.toUpperCase()} wins!`);
      restartGame();
    }, 100);
    return;
  }

  currentPlayer = currentPlayer === "x" ? "o" : "x";
}

function restartGame() {
  currentPlayer = "x";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
restartButton.addEventListener("click", restartGame);
