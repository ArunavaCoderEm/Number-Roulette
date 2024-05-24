import { initializeWebSocketServer } from "./src/Websockets";

const express = require("express");
const cors = require("cors");
const server = express();

const PORT = 3030; 

const corsConfig = {
    origin : "*",
    credentials : true,
    methods : ["GET","HEAD","PUT","PATCH","POST","OPTIONS","DELETE"]
}

server.use(cors(corsConfig)); 

server.get("/", (req:any, res:any) => {
    res.send("RPS & Websocket server running stable.")
})

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

initializeWebSocketServer();

server.listen(PORT, () => {
    console.log("Server started properly on port ",PORT);
})