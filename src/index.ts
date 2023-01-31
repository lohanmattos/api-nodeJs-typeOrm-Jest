import Express, { Request, Response } from "express";
import routeUser from "./routes";
const server = Express();

const host = "http://localhost";
const port =  5000;


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
