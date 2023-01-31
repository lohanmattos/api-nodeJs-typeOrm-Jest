import Router, { Request, Response } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";

const routeUser = Router();
const users = new CreateUserController();

routeUser.get('/users', users.handler)

export default routeUser;