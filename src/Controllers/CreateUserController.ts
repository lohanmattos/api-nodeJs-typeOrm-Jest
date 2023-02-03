import { Request, Response } from "express";
import { CreateUserService } from "../Services/CreateUserService";
import { v4 as uuid } from 'uuid';

class CreateUserController {
    async handler(req: Request, res:Response){

        const username = req.body.username;
        const email = req.body.email;
        const id = uuid();

        const createUserService = new CreateUserService();

        if (username.length === 0 || email.length === 0){
            res.status(400).json({message:"Preencha todos os campos."})
        }

        const createUser = await createUserService.execute({id, username, email});

        return res.status(201).json(createUser);
        
    }

}


export {CreateUserController}