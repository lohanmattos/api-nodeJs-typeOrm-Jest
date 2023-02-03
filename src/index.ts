import express, { Request, Response }  from "express";
import routeUser from "./routes";
import "reflect-metadata";
import  createConnection  from "./database";

createConnection();
const server = express();


const host = "http://localhost";
const port =  3000;

server.use(express.json());

//Routa da Status
server.get("/", (req: Request, res: Response) => {
    return res.json({
        mensagem: "Olá, sou uma API"
    })
})

//Configurações de Rotas
server.use(routeUser)


//Iniciando o Servidor
server.listen(port, () => {
    console.log(`Servidor Online em: ${host}:${port}`)
})
