import Router, { Request, Response } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { GetAllUserController } from "./Controllers/GetAllUserController";
import { UpdateUserController } from "./Controllers/UpdateUserController";
import { DeleteUserController } from "./Controllers/DeleteUserController";

//Instancia Router
const routeUser = Router();

const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


routeUser.post('/users', createUserController.handler)
routeUser.get('/users', getAllUserController.handler)
routeUser.patch('/user', updateUserController.handler);
routeUser.delete('/user/:id', deleteUserController.handler);

//Exporta a class para ser utilizada por outros
export default routeUser;