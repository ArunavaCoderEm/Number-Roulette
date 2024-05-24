import WebSocket from "ws";

export enum GameState {
    WAITING_FOR_PLAYERS,
    IN_PROGRESS,
    GAME_OVER,
}

export class Game {
    private player1:WebSocket;
    private player2:WebSocket;
    private player1Choice: string | null = null;
    private player2Choice: string | null = null;
    private state: GameState = GameState.WAITING_FOR_PLAYERS;

    constructor (player1: WebSocket, player2:WebSocket){
        this.player1 = player1;
        this.player2 = player2;
    }
}