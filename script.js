const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      document.getElementById('message').textContent = `${currentPlayer} wins!`;
      return;
    }
  }

  if (!board.includes('')) {
    gameOver = true;
    document.getElementById('message').textContent = 'It\'s a draw!';
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  currentPlayer = player1;
  renderBoard();
  document.getElementById('message').textContent = '';
}

function renderBoard() {
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName('cell')[i].textContent = board[i];
  }
}
