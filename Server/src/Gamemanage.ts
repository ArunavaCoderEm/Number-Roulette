import { WebSocket } from 'ws';
import { HIT } from './Message';
import { Game } from './Game';

export class Gamemanager {
    private games: Game[];
    private restPl: WebSocket;
    private players: WebSocket[];

    constructor() {
        this.games = [];
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

                }
                else {
                    this.restPl = socket;
                }
            }
        })
    }
}