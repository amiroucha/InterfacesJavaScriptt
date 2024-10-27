"use strict";
class Tablero {
    constructor() {
        this.board = Array(9).fill(''); // Crea un tablero de 9 celdas, inicialmente vacías
        this.currentPlayer = 'X'; // Empieza jugando la 'X'
        this.isGameOver = false; // Inicialmente el juego no ha terminado
        this.boardElement = document.getElementById('board'); // Elemento del tablero
        this.statusElement = document.getElementById('status'); // Elemento para mostrar el estado
        this.resetButton = document.getElementById('reset'); // Botón para reiniciar el juego
        this.resetButton.addEventListener('click', () => this.resetGame()); // Maneja el evento de reinicio
        document.addEventListener('DOMContentLoaded', () => this.initGame()); // Inicializa el juego al cargar la página
    }
    // Método para inicializar el tablero de juego
    initGame() {
        this.boardElement.innerHTML = ''; // Limpia el contenido del tablero
        this.board.forEach((_, index) => {
            const cell = document.createElement('div'); // Crea un nuevo div para cada celda
            cell.classList.add('cell'); // Añade la clase 'cell' al div
            cell.dataset.index = index.toString(); // Asigna el índice de la celda al atributo data-index
            cell.addEventListener('click', (event) => this.handleCellClick(event)); // Añade un evento de clic a la celda
            this.boardElement.appendChild(cell); // Añade la celda al tablero
        });
        this.updateStatus(); // Actualiza el estado del juego
    }
    // Maneja el clic en una celda del tablero
    handleCellClick(event) {
        const target = event.target; // Obtiene el elemento clickeado
        const index = target.dataset.index; // Obtiene el índice de la celda clickeada
        // Si la celda ya fue seleccionada o el juego ha terminado, no hacer nada
        if (!index || this.board[+index] || this.isGameOver)
            return;
        // Actualiza la celda con el símbolo del jugador actual
        this.board[+index] = this.currentPlayer;
        this.updateBoard(); // Actualiza el tablero visualmente
        // Verifica si hay un ganador o empate
        if (this.checkWinner()) {
            this.isGameOver = true; // Marca el juego como terminado
            this.statusElement.textContent = `Jugador ${this.currentPlayer} ha ganado!`;
        }
        else if (this.board.every(cell => cell !== '')) { // Marca el juego como terminado si hay empate
            this.isGameOver = true;
            this.statusElement.textContent = 'Empate!';
        }
        else { // Alterna entre 'X' y 'O'
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; // Alterna entre 'X' y 'O'
            this.updateStatus(); // Actualiza el estado del juego
        }
    }
    // Actualiza el contenido del tablero visualmente
    updateBoard() {
        const cells = this.boardElement.querySelectorAll('.cell'); // Selecciona todas las celdas
        cells.forEach((cell, index) => {
            cell.textContent = this.board[index]; // Asigna el contenido del tablero a cada celda
        });
    }
    // Actualiza el estado de quién es el siguiente en jugar
    updateStatus() {
        if (!this.isGameOver) { // Solo actualiza si el juego no ha terminado
            this.statusElement.textContent = `Turno del jugador: ${this.currentPlayer}`; // Muestra el jugador actual
        }
    }
    // Verifica si hay un ganador
    checkWinner() {
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
            const [a, b, c] = combo; // Desestructura la combinación
            return (this.board[a] && // Verifica que la celda no esté vacía
                this.board[a] === this.board[b] && // Compara la celda a con b
                this.board[a] === this.board[c] // Compara la celda a con c
            );
        });
    }
    // Reinicia el juego
    resetGame() {
        this.board = Array(9).fill(''); // Reinicia el tablero a celdas vacías
        this.currentPlayer = 'X'; // Reinicia el jugador actual a 'X'
        this.isGameOver = false; // Reinicia el estado del juego
        this.updateBoard(); // Actualiza el tablero visualmente
        this.updateStatus(); // Actualiza el estado del juego
    }
}
// Inicializa el juego
const game = new Tablero();
