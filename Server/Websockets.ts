import { WebSocketServer } from 'ws';

const PORT = 3060;

export function initializeWebSocketServer() {
    const wss = new WebSocketServer({port : PORT});
    wss.on('connection', async (ws: any, req: any) => {
        console.log("someone connected");
        ws.send("Someone Connected");
        ws.on('message', (message: string | null) => {
            console.log('received: %s', message);
            ws.send(`You sent -> ${message}`);
        });
    });

    console.log('WebSocket server is running on port ',PORT);
}
