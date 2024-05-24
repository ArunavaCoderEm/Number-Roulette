import { WebSocketServer } from 'ws';
import { Gamemanager } from './src/Gamemanage';

const PORT = 3060;

const wss = new WebSocketServer({port : PORT});

const gamemanager = new Gamemanager();

wss.on('connection', async (ws: any, req: any) => {
    console.log("someone connected");
    gamemanager.addPl(ws)
    ws.send("Someone Connected");
    ws.on('disconnect', () => gamemanager.removePl(ws));
});

console.log('WebSocket server is running on port ',PORT);