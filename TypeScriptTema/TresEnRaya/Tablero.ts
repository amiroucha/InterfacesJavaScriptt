export enum Jugador {
    X = 'X',
    O = 'O'
}

export class Tablero {
    // atributos
    public board: (Jugador | '')[];
    public currentPlayer: Jugador.X | Jugador.O;
    public isGameOver: boolean;

    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = Jugador.X;
        this.isGameOver = false;
    }

    // getters
    public getBoard(): (Jugador | '')[] {
        return this.board;
    }

    public getCurrentPlayer(): Jugador {
        return this.currentPlayer;
    }

    public getIsGameOver(): boolean {
        return this.isGameOver;
    }

    // poner la ficha en una celda
   /* public setFicha(numCelda: number): boolean {
        if (this.board[numCelda] || this.isGameOver) {
            return false; // esa celda está llena
        }

        this.board[numCelda] = this.currentPlayer; // se pone la ficha del jugador actual
        return true; // se puede rellenar esa celda
    }*/

    public checkGanador(): boolean {
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
        for (const combina of winningCombinations) {
            const [a, b, c] = combina;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return true; // hay una combinación ganadora
            }
        }
        return false; // no hay ganador
    }

    // reiniciar partida
    public resetGame(): void {
        this.board = Array(9).fill('');
        this.currentPlayer = Jugador.X;
        this.isGameOver = false;
    }
}