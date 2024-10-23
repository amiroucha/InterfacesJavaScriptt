const gameState = {
    board: Array(9).fill(''),// Crea un tablero de 9 celdas, inicialmente vacías
    currentPlayer: 'X', //empieza jugando la x
    isGameOver: false //bool de cuando termina el juego
  }; 
  
  //variables donde referencia con html
  const statusElement = document.getElementById('status');// Elemento para mostrar el estado del juego
  const resetButton = document.getElementById('reset');  // Botón para reiniciar el juego
  
  function initGame(){
    gameState.botones = document.querySelector('#board').querySelectorAll('button');
    gameState.board.forEach(btn=> {
        btn.addEventListener('click', handleCellClick);
      });
      resetButton.addEventListener('click', handleCellClick);
  }

  function handlerbtnClick(event){

  }

  //actualizo quien va a jugar
  function handlerResetClick(event)
  {
    gameState.board = Array(9).fill('-');
    gameState.botones.forEach(btn => {
        btn.innerText = '';
    });

    gameState.currentPlayer = 'X';
    gameState.isGameOver = false;
    updateStatus();

  }

