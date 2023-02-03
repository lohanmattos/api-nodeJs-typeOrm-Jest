import Router, { Request, Response } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
//Instancia Router
const routeUser = Router();

//Instancia a classe CreateUserController
const createUserController = new CreateUserController();

//Cria a rota /users chamando o controller de user
routeUser.post('/users', createUserController.handler)


//Exporta a class para ser utilizada por outros
export default routeUser;