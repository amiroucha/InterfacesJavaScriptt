enum Jugador{
    X = 'X',
    O = 'O'
}

class Tablero{
    //atributos
    private board: (Jugador | '')[];
    private currentPlayer: Jugador;
    private isGameOver: boolean;

    constructor()
    {
        this.board = Array(9).fill('');
        this.currentPlayer = Jugador.X;
        this.isGameOver = false;
    }
    //getters
    public getBoard(): (Jugador | '')[]{
        return this.board;
    }

    public getCurrentPlayer(): Jugador{
        return this.currentPlayer;
    }

    public getIsGameOver():boolean{
        return this.isGameOver;
    }

    //poner la ficha en una celda
    public setFicha(num :number): boolean{
        if(this.board[num] || this.isGameOver)
            return false;//esa celda esta llena

        this.board[num] = this.currentPlayer;//se pone la ficha del jugador act
        return true;//se puede rellenar esa celda
    }

    private checkGanador():boolean{
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
        for(const combina of winningCombinations){
            const [a,b,c] = combina;
            if(this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c] ){
                return true;//hay una combinacion gahadora
            }   
        }
        return false; //no hay ganador
    }

    //actualiza estado del juego
    public updateEstado():string{
        if(this.checkGanador())
        {
            this.isGameOver = true;
            return `Jugador `+this.currentPlayer+` ha ganado!!!`
        }else if(this.board.every(celda => celda !== ''))
            //comprueba que todas las celdas estan llenas, antes ya comprobe si hay ganador
        {
            this.isGameOver = true;
            return `Empate!!!!`
        }
        //todavia no termino el juego
        //cambio eñl turno
        this.currentPlayer = this.currentPlayer === Jugador.X ? Jugador.O : Jugador.X;
        return `Turno del jugador`+this.currentPlayer;
    }

    //reiniciar partida
    public resetGame():void{
        this.board = Array(9).fill('');
        this.currentPlayer = Jugador.X;
        this.isGameOver = false;
    }
}

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