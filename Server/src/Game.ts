import WebSocket from "ws";

export class Game {
    public player1: WebSocket | null;
    public player2: WebSocket | null;
    private player1Num: number | null = null;
    private player2Num: number | null = null;
    private player1Score: number = 0;
    private player2Score: number = 0;
    private winningScore: number = 100;

    constructor(player1: WebSocket, player2: WebSocket) {
        this.player1 = player1;
        this.player2 = player2;
    }

    chooseNum(socket: WebSocket, move: number) {
        if (socket !== this.player1 && socket !== this.player2) {
            return;
        }

        if (socket === this.player1) {
            this.player1Num = move;
        } else if (socket === this.player2) {
            this.player2Num = move;
        }

        if (this.player1Num !== null && this.player2Num !== null) {
            this.updateScores();
            const winner : any = this.checkForWinner();
            this.sendUpdate(winner);
            if (!winner) {
                this.resetNumbers(); 
            }
        }
    }

    private updateScores() {
        if (this.player1Num !== null && this.player2Num !== null) {
            if (this.player1Num > this.player2Num) {
                this.player1Score += 10;
            } else if (this.player1Num < this.player2Num) {
                this.player2Score += 10;
            }
        }
    }

    private checkForWinner(): String | null {
        if (this.player1Score >= this.winningScore) {
            return "player1";
        } else if (this.player2Score >= this.winningScore) {
            return "player2";
        }
        return null;
    }

    private sendUpdate(winner: string | null = null) {
        const update = {
            player1Num: this.player1Num,
            player2Num: this.player2Num,
            player1Score: this.player1Score,
            player2Score: this.player2Score,
            winner: winner,
        };

        if (this.player1) {
            this.player1.send(JSON.stringify(update));
        }

        if (this.player2) {
            this.player2.send(JSON.stringify(update));
        }
    }

    private resetNumbers() {
        this.player1Num = null;
        this.player2Num = null;
    }
}
