import { WebSocket } from 'ws';
import { ASSIGNED, CHOOSE, HIT } from './Message';
import { Game } from './Game';

export class Gamemanager {
    private games: Game[];
    private restPl: WebSocket | null;
    private players: WebSocket[];

    constructor() {
        this.games = [];
        this.restPl = null;
        this.players = [];
    }

    addPl(socket:WebSocket){
        this.players.push(socket);
        this.messPl(socket);
    } 

    removePl(socket:WebSocket){
        this.players = this.players.filter(player => player !== socket)
    }

    private messPl(socket: WebSocket) {
        socket.on("message", (data: any) => {
            const message = JSON.parse(data.toString());
    
            if (message.type === HIT) {
                console.log("Hit message received.");
    
                if (this.restPl && this.players.length >= 2) {
                    console.log("Assigning players to a game.");
                    
                    const player2 = this.players.pop()!;
                    const player1 = this.restPl;
    
                    const game = new Game(player1, player2);
                    this.games.push(game);
    
                    this.sendAssignmentMessage(player1, player2);
                    this.restPl = null;
                } else {
                    console.log("Waiting for another player to connect.");
                    this.restPl = socket;
                }
            }
    
            if (message.type === CHOOSE) {
                console.log("Choose message received.");
    
                const game = this.games.find(game =>
                    game.player1 === socket || game.player2 === socket
                );
                if (game) {
                    game.chooseNum(socket, message.plnum);
                }
            }
        });
    }    
    private sendAssignmentMessage(player1: WebSocket, player2: WebSocket) {
        const player1Message = JSON.stringify({
            type: ASSIGNED,
            role: "player1",    
            message: "You are Player 1"
        });

        const player2Message = JSON.stringify({
            type: ASSIGNED,
            role: "player2",
            message: "You are Player 2"
        });

        player1.send(player1Message);
        player2.send(player2Message);
    }
}