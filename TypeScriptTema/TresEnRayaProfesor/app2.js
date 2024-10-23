// Inicializa el estado del juego
const gameState = {
    board: Array(9).fill('-'),
    botones: "", // Array que apuntan a cada uno de los botones del tablero
    currentPlayer: 'X',
    isGameOver: false
  };
  
  const boardElement = document.getElementById('board');
  const statusElement = document.getElementById('status');
  const resetButton = document.getElementById('reset');
  
  function initGame() {
    gameState.botones = document.querySelector('#board').querySelectorAll('button');
    gameState.botones.forEach(btn => {
      btn.addEventListener('click', handleBtnClick);
    });

    resetButton.addEventListener('click', handlerResetClick);
  }
 
  function handleBtnClick(event){
    
    if (gameState.board[this.id]!= '-' || gameState.isGameOver) return;

    gameState.board[this.id] = gameState.currentPlayer;
    gameState.botones[this.id].innerText= gameState.currentPlayer;

    

    if (comprobarGanador()) {
      gameState.isGameOver = true;
      updateStatus();
    } else if (esEmpate()) {
      gameState.isGameOver = true;
      statusElement.innerText=`Se ha EMPATADO`;
    } else {
      gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
      updateStatus();
    }

  }
 
  // Actualiza el estado de quién es el siguiente en jugar
  function updateStatus() {
    if (!gameState.isGameOver) {
      statusElement.innerText=`Turno del Jugador: ${gameState.currentPlayer}`;
    } else {
      statusElement.innerText=`El Jugador "${gameState.currentPlayer}" HA GANADO`;
    }
  }
  
  // Verifica si hay un ganador
  function comprobarGanador() {
    if ((gameState.board[0] != '-') && 
        (gameState.board[0] == gameState.board[1]) && 
        (gameState.board[1] == gameState.board[2])){
      return true; 
    }else if ((gameState.board[3] != '-') && 
              (gameState.board[3] == gameState.board[4]) && 
              (gameState.board[4] == gameState.board[5])){
      return true;
    }else if ((gameState.board[6] != '-') && 
               (gameState.board[6] == gameState.board[7]) && 
               (gameState.board[7] == gameState.board[8])){
      return true;
    }else if ((gameState.board[0] != '-') && 
               (gameState.board[0] == gameState.board[3]) && 
               (gameState.board[3] == gameState.board[6])){
      return true;
    }else if ((gameState.board[1] != '-') && 
               (gameState.board[1] == gameState.board[4]) && 
               (gameState.board[4] == gameState.board[7])){
      return true;
    }else if ((gameState.board[2] != '-') && 
               (gameState.board[2] == gameState.board[5]) && 
               (gameState.board[5] == gameState.board[8])){
               return true;
    }else if ((gameState.board[0] != '-') && 
               (gameState.board[0] == gameState.board[4]) && 
               (gameState.board[4] == gameState.board[8])){
      return true;
    }else if ((gameState.board[2] != '-') && 
               (gameState.board[2] == gameState.board[4]) && 
               (gameState.board[4] == gameState.board[6])){
      return true;
    } 
    else {
       return false;
      }
  }

  function esEmpate() {
    return gameState.board.every(valor => valor !== '-');
  }

  function handlerResetClick(event){
    gameState.board = Array(9).fill('-');
    gameState.botones.forEach(btn =>{
      btn.innerText = '';
    });
    gameState.currentPlayer = 'X';
    gameState.isGameOver = false;
    updateStatus();
  }
  
  // Inicializa el juego al cargar la página

document.addEventListener('DOMContentLoaded',initGame);