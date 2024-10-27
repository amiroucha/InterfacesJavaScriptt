class Tablero {
    //atributos
    private board: string[]; //tablero
    private currentPlayer: string; //('X' o 'O')
    private isGameOver: boolean; 
    private boardElement: HTMLElement; //Elemento del tablero
    private statusElement: HTMLElement; //Elemento del estado
    private resetButton: HTMLButtonElement; //Botón reinicia el juego
    private newGameButton: HTMLButtonElement; //reinicia los puntos
    private puntosX: number; // Puntos para Bob Esponja
    private puntosO: number; // Puntos para Patricio
    private puntosXElement: HTMLElement; // Elemento HTML para mostrar puntuación de Bob Esponja
    private puntosOElement: HTMLElement;
   
  
    constructor() {
      this.board = Array(9).fill(''); //tablero de 9 celdas, vacías al 1
      this.currentPlayer = 'X'; //Empieza la 'X'
      this.isGameOver = false; 
      this.boardElement = document.getElementById('board') as HTMLElement; 
      this.statusElement = document.getElementById('status') as HTMLElement;
      this.resetButton = document.getElementById('reset') as HTMLButtonElement; 
      this.puntosXElement = document.getElementById('scoreX') as HTMLElement;
      this.puntosOElement = document.getElementById('scoreO') as HTMLElement;
      this.puntosX= 0;
      this.puntosO = 0;

      this.resetButton.addEventListener('click', () => this.resetGame()); 
      document.addEventListener('DOMContentLoaded', () => this.initGame()); 

      this.newGameButton = document.getElementById('newgame') as HTMLButtonElement; 
      this.newGameButton.addEventListener('click', () => this.startNewGame());
    }

    private getPlayerName(): string {
        return this.currentPlayer === 'X' ? 'Bob Esponja' : 'Patricio';
      }

    // Método para inicializar el tablero de juego
    private initGame(): void {
      this.boardElement.innerHTML = ''; //Limpio el contenido del tablero
      this.board.forEach((_, index) => {
        const cell = document.createElement('div'); 
        cell.classList.add('cell');
        cell.dataset.index = index.toString(); 
        cell.addEventListener('click', (event) => this.CellClick(event)); // asigna evento click a la celda
        this.boardElement.appendChild(cell); // Añade la celda al tablero
      });
      this.updateStatus(); // Actualiza el estado del juego
    }
  
    // Maneja el clic en una celda del tablero
    private CellClick(event: Event): void {
      const target = event.target as HTMLElement; //elemento click
      const index = target.dataset.index; //índice de la celda click
  
      //Si la celda ha sido seleccionada ya o el juego sigue, no hace nada
      if (!index || this.board[+index] || this.isGameOver) return;
  
      // Actualiza la celda con el símbolo del jugador actual
      this.board[+index] = this.currentPlayer;
      this.updateBoard(); 
  
      //comprobar resultados
      if (this.checkWinner()) {//hay ganador
        this.isGameOver = true; //el juego termina
        this.statusElement.textContent = `Jugador ${this.getPlayerName()} ha ganado!`;
        if (this.currentPlayer === 'X') {
            this.puntosX++;
          } else {
            this.puntosO++;
          }
          this.updateScore(); // Actualiza la visualización de la puntuación
      } else if (this.board.every(cell => cell !== '')) { //hay  empate
        this.isGameOver = true;
        this.statusElement.textContent = 'Empate!';
      } else { // Alterna entre 'X' y 'O'
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; // Alterna entre 'X' y 'O'
        this.updateStatus(); //Act estado del juego
      }
    }

    //puntos
    private updateScore(): void {
        this.puntosXElement.textContent = `Bob Esponja: ${this.puntosX}`;
        this.puntosOElement.textContent = `Patricio: ${this.puntosO}`;
    }

    //Act el tablero visualmente
    private updateBoard(): void {
      const cells = this.boardElement.querySelectorAll('.cell'); //coge todas las celdas
      cells.forEach((cell, index) => {
        cell.innerHTML = '';  
        if (this.board[index] === 'X') {
            const img = document.createElement('img'); 
            img.src = 'Imagenes/BobEsponja.png'; // Ruta a la imagen de 'X'
            img.alt = 'X';
            cell.appendChild(img); // Añade la imagen a la celda
        } else if (this.board[index] === 'O') {
            const img = document.createElement('img'); 
            img.src = 'Imagenes/Patricio.png'; // Ruta a la imagen de 'O'
            img.alt = 'O';
            cell.appendChild(img); // Añade la imagen a la celda
        }


      });
    }
  
    //quien es el siguiente en jugar
    private updateStatus(): void {
      if (!this.isGameOver) { //en caso de seguir jugando
        this.statusElement.textContent = `Turno del jugador: ${this.getPlayerName()}`; // Muestra el jugador actual
      }
    }
  
    // Verifica si hay un ganador
    private checkWinner(): boolean {
      const winningCombinations: number[][] = [ 
        [0, 1, 2],//ccombinaciones ganadoras posibles
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
        const [a, b, c] = combo; 
        return (
          this.board[a] && // Verifica que la celda no esté vacía
          this.board[a] === this.board[b] && // Compara la celda a con b
          this.board[a] === this.board[c] // Compara la celda a con c
        );
      });
    }
  
    // Reinicia el juego
    private resetGame(): void {
      this.board = Array(9).fill(''); //tablero a celdas vacías
      this.currentPlayer = 'X'; //jugador actual a 'X'
      this.isGameOver = false; //estado del juego false
      this.updateBoard(); 
      this.updateStatus();
    }
    //boton de nueva partida
    private startNewGame(): void {
        this.puntosX = 0; 
        this.puntosO = 0;
        this.updateScore(); 
        this.resetGame(); 
    }
  }
  
  // se inicia el juegp
  const game = new Tablero();
  