import { Request, Response } from "express";
import { CreateUserService } from "../Services/CreateUserService";
import { v4 as uuid } from 'uuid';


class CreateUserController {
    async handler(req: Request, res:Response){

        const user = {
            username: req.body.username,
            email: req.body.email,
            id: uuid(),
        }

        const createUserService = new CreateUserService();

        if (user.username.length !== 0){
            const createUser = await createUserService.execute(user);

            return res.status(201).json(createUser);
        }

        res.status(400).json({message:"Preencha todos os campos."})
        
    }

}


export {CreateUserController}