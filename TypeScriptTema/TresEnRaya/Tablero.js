export var Jugador;
(function (Jugador) {
    Jugador["X"] = "X";
    Jugador["O"] = "O";
})(Jugador || (Jugador = {}));
export class Tablero {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = Jugador.X;
        this.isGameOver = false;
    }
    //getters
    getBoard() {
        return this.board;
    }
    getCurrentPlayer() {
        return this.currentPlayer;
    }
    getIsGameOver() {
        return this.isGameOver;
    }
    //poner la ficha en una celda
    setFicha(num) {
        if (this.board[num] || this.isGameOver)
            return false; //esa celda esta llena
        this.board[num] = this.currentPlayer; //se pone la ficha del jugador act
        return true; //se puede rellenar esa celda
    }
    checkGanador() {
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
        for (const combina of winningCombinations) {
            const [a, b, c] = combina;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return true; //hay una combinacion gahadora
            }
        }
        return false; //no hay ganador
    }
    //actualiza estado del juego
    updateEstado() {
        if (this.checkGanador()) {
            this.isGameOver = true;
            return `Jugador ` + this.currentPlayer + ` ha ganado!!!`;
        }
        else if (this.board.every(celda => celda !== '')) 
        //comprueba que todas las celdas estan llenas, antes ya comprobe si hay ganador
        {
            this.isGameOver = true;
            return `Empate!!!!`;
        }
        //todavia no termino el juego
        //cambio eñl turno
        this.currentPlayer = this.currentPlayer === Jugador.X ? Jugador.O : Jugador.X;
        return `Turno del jugador` + this.currentPlayer;
    }
    //reiniciar partida
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = Jugador.X;
        this.isGameOver = false;
    }
}
