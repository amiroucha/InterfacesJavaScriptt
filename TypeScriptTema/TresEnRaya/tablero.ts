// Definir un enumerado para representar a los jugadores
enum Player {
    X = 'X',
    O = 'O'
  }
  
  // Definir una interfaz para el estado del juego
  interface GameState {
    board: (Player | '')[]; // El tablero ahora puede contener 'X', 'O' o estar vacío
    currentPlayer: Player;
    isGameOver: boolean;
  }
  
  // Crear la clase `Tablero` que encapsula la lógica del juego
  export class tablero {
    // Atributos privados de la clase
    private gameState: GameState; 
    private boardElement: HTMLElement;
    private statusElement: HTMLElement; 
    private resetButton: HTMLElement; 
  
    // Constructor de la clase que inicializa los atributos y el estado
    constructor() {
      // Aquí especificamos explícitamente el tipo de `gameState` como `GameState`
      this.gameState = {
        board: Array(9).fill('') as (Player | '')[], // Tablero vacío inicialmente
        currentPlayer: Player.X, // El jugador 'X' comienza el juego
        isGameOver: false // El juego no ha terminado al inicio
      };
  
      // Asigna los elementos del DOM a las variables
      this.boardElement = document.getElementById('board') as HTMLElement;
      this.statusElement = document.getElementById('status') as HTMLElement;
      this.resetButton = document.getElementById('reset') as HTMLElement;
  
      // Inicializa el tablero y añade el evento de clic al botón de reinicio
      this.initGame();
      this.resetButton.addEventListener('click', () => this.resetGame());
    }
  
    // Función para inicializar el tablero de juego
    private initGame() {
      this.boardElement.innerHTML = ''; // Limpia el contenido del tablero
  
      // Crea cada celda del tablero y les añade un evento de clic
      this.gameState.board.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index.toString();
        cell.addEventListener('click', (event) => this.handleCellClick(event));
        this.boardElement.appendChild(cell);
      });
  
      // Actualiza el estado del turno inicial
      this.updateStatus();
    }
  
    // Resto de los métodos...

    private handleCellClick(event: Event) {
        const target = event.target as HTMLElement;
        const index = parseInt(target.dataset.index || '', 10);
    
        // Si la celda ya fue seleccionada o el juego ha terminado, no hacer nada
        if (this.gameState.board[index] || this.gameState.isGameOver) return;
    
        // Actualiza la celda con el símbolo del jugador actual
        this.gameState.board[index] = this.gameState.currentPlayer;
        this.updateBoard();
    
        // Verifica si hay un ganador o empate
        if (this.checkWinner()) {
          this.gameState.isGameOver = true;
          this.statusElement.textContent = `¡Jugador ${this.gameState.currentPlayer} ha ganado!`;
        } else if (this.gameState.board.every(cell => cell !== '')) {
          this.gameState.isGameOver = true;
          this.statusElement.textContent = '¡Empate!';
        } else {
          // Alterna entre jugadores 'X' y 'O'
          this.gameState.currentPlayer = this.gameState.currentPlayer === Player.X ? Player.O : Player.X;
          this.updateStatus();
        }
      }
    
      // Actualiza el contenido del tablero visualmente
      private updateBoard() {
        const cells = this.boardElement.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
          cell.textContent = this.gameState.board[index] || '';
        });
      }
    
      // Actualiza el estado de quién es el siguiente en jugar
      private updateStatus() {
        if (!this.gameState.isGameOver) {
          this.statusElement.textContent = `Turno del jugador: ${this.gameState.currentPlayer}`;
        }
      }
    
      // Verifica si hay un ganador
      private checkWinner(): boolean {
        const winningCombinations: number[][] = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
    
        return winningCombinations.some(combo => {
          const [a, b, c] = combo;
          return (
            this.gameState.board[a] &&
            this.gameState.board[a] === this.gameState.board[b] &&
            this.gameState.board[a] === this.gameState.board[c]
          );
        });
      }
    
      // Reinicia el juego
      private resetGame() {
        this.gameState.board = Array(9).fill('') as (Player | '')[];
        this.gameState.currentPlayer = Player.X;
        this.gameState.isGameOver = false;
        this.updateBoard();
        this.updateStatus();
      }
    }
  
  