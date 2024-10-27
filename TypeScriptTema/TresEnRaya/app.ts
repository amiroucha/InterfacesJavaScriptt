import { Tablero, Jugador } from './Tablero';

// empieza el juego
const gameState = new Tablero();

// referencia al html
const boardElement = document.getElementById('board') as HTMLElement; 
const statusElement = document.getElementById('status') as HTMLElement; 
const resetButton = document.getElementById('reset') as HTMLButtonElement;

function initGame(): void {
    boardElement.innerHTML = '';
    gameState.getBoard().forEach((_, index) => {
        const cell = document.createElement('div'); // Crea un nuevo div para cada celda
        cell.classList.add('cell'); // Añade la clase 'cell' al div
        cell.dataset.index = index.toString(); // Asigna el índice de la celda al atributo data-index
        cell.addEventListener('click', celdaClick); // Añade un evento de clic a la celda
        boardElement.appendChild(cell); // Añade la celda al tablero
    });
    actualizaStatus();
}

// controla el click en una celda
function celdaClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const index = Number(target.dataset.index); // indice de la celda click

    // Si la celda ya fue seleccionada o el juego ha terminado, no hacer nada
    if (gameState.board[index] || gameState.isGameOver) return;
    updateBoard(); // Actualiza el tablero visualmente

    // Actualiza la celda con el símbolo del jugador actual
    gameState.board[index] = gameState.currentPlayer;


    // Comprueba si hay un ganador
    if (gameState.checkGanador()) {
        gameState.isGameOver = true; // Cambia el estado del juego
        statusElement.textContent = `Jugador ${gameState.getCurrentPlayer()} ha ganado!!!`;
        return; // Termina la función aquí
    } 
        
    // Comprueba si hay un empate
    if (gameState.getIsGameOver() && gameState.getBoard().every(celda => celda !== '')) {
        gameState.isGameOver = true;
        statusElement.textContent = `Empate!!!!`;
        return; // Termina la función aquí
    }

    // Cambia de turno
    gameState.currentPlayer = gameState.currentPlayer === Jugador.X ? Jugador.O : Jugador.X;
    actualizaStatus(); // Actualiza el estado
    
}

// act contenido del tablero visual
function updateBoard(): void {
    const cells: NodeListOf<HTMLElement> = boardElement.querySelectorAll('.cell'); // Selecciona todas las celdas
    cells.forEach((cell: HTMLElement, index: number) => {
        cell.textContent = gameState.getBoard()[index]; // Asigna el contenido del tablero a cada celda
    });
}

// act estado de quien es el siguiente en jugar
function actualizaStatus(): void {
    if (!gameState.getIsGameOver()) { // actualiza si el juego no terminó
        statusElement.textContent = `Turno del jugador: ${gameState.getCurrentPlayer()}`; // Muestra el jugador actual
    }
}

resetButton.addEventListener('click', (): void => {
    gameState.resetGame();
    updateBoard();
    actualizaStatus();
});

document.addEventListener('DOMContentLoaded', initGame);