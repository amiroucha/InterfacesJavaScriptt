
import { Tablero, Jugador } from './Tablero';

//empieza el juego
const gameState = new Tablero();

//referencia al html
const boardElement = document.getElementById('board') as HTMLElement; 
const statusElement = document.getElementById('status') as HTMLElement; 
const resetButton = document.getElementById('reset') as HTMLButtonElement;



function initGame(): void{
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
//act contenido del tablero visual
function updateBoard(): void {
    const cells = boardElement.querySelectorAll('.cell'); // Selecciona todas las celdas
    cells.forEach((cell, index) => {
        cell.textContent = gameState.getBoard()[index]; // Asigna el contenido del tablero a cada celda
    });
}
//controla el click en una celda
function celdaClick(event: MouseEvent):void{
    const target= event.target as HTMLElement;
    const indice = Number(target.dataset.indice);//indice de la celda click

    if(gameState.setFicha(indice)){
        updateBoard(); //act tablero
        const mensajeEstado = gameState.updateEstado();
        statusElement.textContent = mensajeEstado; //enseña mensaje en el elemnto del estadi
    }

}
//act estado de quien es el siguientye en jugar
function actualizaStatus(): void {
    if (!gameState.getIsGameOver()) {//actualiza si el juego no termino
        statusElement.textContent = `Turno del jugador: `+gameState.getCurrentPlayer; // Muestra el jugador actual
    }
}

resetButton.addEventListener('click', (): void => {
    gameState.resetGame();
    updateBoard();
    actualizaStatus();
});

document.addEventListener('DOMContentLoaded', initGame);