import { Request, Response } from "express";
import { DeleteUserService } from "../Services/DeleteUserService";

class DeleteUserController{

    async handler(request: Request, response: Response){

        const deleteUserService = new DeleteUserService();

        const {id} = request.params;

        if(id === undefined) {
            return response.status(400).json({message:"Informe o id na rota"})
        }

        await deleteUserService.execute({id})

        return response.sendStatus(204)
    }
}

export {DeleteUserController}