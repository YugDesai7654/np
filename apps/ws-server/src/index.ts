import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"
const server = new WebSocketServer({ port: 3001 });

server.on("connection", (socket) => {

    client.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
  console.log("Hi there you are connected to server");

  
});

console.log("WebSocket server is running on ws://localhost:3001");