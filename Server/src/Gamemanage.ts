import { WebSocket } from 'ws';
import { CHOOSE, HIT } from './Message';
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
        socket.on("message", (data:any) => {
            const message = JSON.parse(data.toString());
            if(message.type === HIT) {
                if(this.restPl) {
                    const game =  new Game(this.restPl, socket)
                    this.games.push(game)
                    this.restPl = null
                }
                else {
                    this.restPl = socket;
                }
            }

            if(message.type = CHOOSE){
                const game = this.games.find(game => 
                    game.player1 === socket || game.player2 === socket
                );
                if(game){
                    game.chooseNum(socket, message.plnum)
                }
            }

        })
    }
}