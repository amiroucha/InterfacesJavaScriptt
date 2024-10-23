// Inicializa el estado del juego
const gameState = {
    board: Array(9).fill(''),// Crea un tablero de 9 celdas, inicialmente vacías
    currentPlayer: 'X', //empieza jugando la x
    isGameOver: false //bool de cuando termina el juego
  }; 
  
  //variables donde referencia con html
  const boardElement = document.getElementById('board');//Elemento del tablero
  const statusElement = document.getElementById('status');// Elemento para mostrar el estado del juego
  const resetButton = document.getElementById('reset');  // Botón para reiniciar el juego
  
  // Función para inicializar el tablero de juego
  function initGame() {
    boardElement.innerHTMLS = ''; //// Limpia el contenido del tablero
    gameState.board.forEach((_, index) => {
      const cell = document.createElement('div');; // Crea un nuevo div para cada celda
      cell.classList.add('cell');// Añade la clase 'cell' al div
      cell.dataset.index = index;// Asigna el índice de la celda al atributo data-index
      cell.addEventListener('click', handleCellClick);// Añade un evento de clic a la celda
      boardElement.appendChild(cell);// Añade la celda al tablero
    });
    updateStatus();// Actualiza el estado del juego
  }
  
  // Maneja el clic en una celda del tablero
  function handleCellClick(event) {
    const index = event.target.dataset.index; // Obtiene el índice de la celda clickeada
  
    // Si la celda ya fue seleccionada o el juego ha terminado, no hacer nada
    if (gameState.board[index] || gameState.isGameOver) return;
  
    // Actualiza la celda con el símbolo del jugador actual
    gameState.board[index] = gameState.currentPlayer;
    updateBoard();// Actualiza el tablero visualmente

  
    // Verifica si hay un ganador o empate
    if (checkWinner()) {
      gameState.isGameOver = true; // Marca el juego como terminado
      statusElement.textContent = `Jugador ${gameState.currentPlayer} ha ganado!`;
    } else if (gameState.board.every(cell => cell !== '')) {// Marca el juego como terminado si hay empate
      gameState.isGameOver = true;
      statusElement.textContent = 'Empate!';
    } else {// Alterna entre 'X' y 'O'
      // Cambia de jugador
      gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X'; // Alterna entre 'X' y 'O'
      updateStatus();// Actualiza el estado del juego
    }
  }
  
  // Actualiza el contenido del tablero visualmente
  function updateBoard() {
    const cells = boardElement.querySelectorAll('.cell');// Selecciona todas las celdas
    cells.forEach((cell, index) => {
      cell.textContent = gameState.board[index];// Asigna el contenido del tablero a cada celda
    });
  }
  
  // Actualiza el estado de quién es el siguiente en jugar
  function updateStatus() {
    if (!gameState.isGameOver) { // Solo actualiza si el juego no ha terminado
      statusElement.textContent = `Turno del jugador: ${gameState.currentPlayer}`; // Muestra el jugador actual
    }
  }
  
  // Verifica si hay un ganador
  function checkWinner() {// Define todas las combinaciones ganadoras posibles
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

   // Verifica si alguna combinación ganadora tiene los mismos símbolos
    return winningCombinations.some(combo => {
      const [a, b, c] = combo;// Desestructura la combinación
      return (
        gameState.board[a] &&// Verifica que la celda no esté vacía
        gameState.board[a] === gameState.board[b] &&// Compara la celda a con b
        gameState.board[a] === gameState.board[c]// Compara la celda a con c
      );
    });
  }
  
  // Reinicia el juego
  resetButton.addEventListener('click', () => {
    gameState.board = Array(9).fill('');// Reinicia el tablero a celdas vacías
    gameState.currentPlayer = 'X';// Reinicia el jugador actual a 'X'
    gameState.isGameOver = false; // Reinicia el estado del juego
    updateBoard();// Actualiza el tablero visualmente
    updateStatus();// Actualiza el estado del juego

  });
  
  // Inicializa el juego cuando la página carga
  document.addEventListener('DOMContentLoaded', initGame);