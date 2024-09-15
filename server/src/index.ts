import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import cors from "cors";
import WebSocket from "ws";

dotenv.config();

type DBMessagesRow = {
    id: number;
    message: String;
}

/*
 *
 * WebSocket Server
 * 
 */

const wss = new WebSocket.Server({ port: Number(process.env.WS_PORT) || 3002 })

/*
 *
 * HTTP Server
 * 
 */

const app: Express = express();
const port = process.env.HTTP_PORT || 3001;
const db = mysql.createConnection({
    host: process.env.SQL_HOST!,
    user: process.env.SQL_USER!,
    password: process.env.SQL_PASSWORD!,
    database: process.env.SQL_DB!
})

app.use(cors())
app.use(express.json())

app.get("/messages", (req: Request, res: Response) => {
    db.query('SELECT * FROM messages', (err, rows, fields) => {
        if (err) throw err;
        if(rows) {
            res.json({
                messages: (rows as Array<DBMessagesRow>).map(row => row.message)
            })
        }
    })
});

app.post("/messages", (req: Request, res: Response) => {
    const message: String = req.body.message
    console.log(`Sent: "${message}"`)
    db.query('INSERT INTO messages VALUES(NULL, ?)', [message], (err) => {
        if (err) throw err;
    })
    wss.clients.forEach(client => {
        if(client.readyState == WebSocket.OPEN) {
            client.send(message)
        }
    })
})

app.listen(port, () => {
    db.connect()
    console.log(`Server is running at http://localhost:${port}`);
});