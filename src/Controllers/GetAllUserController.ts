import {Request, Response} from 'express'
import { GetAllUserService } from '../Services/GetAllUserService'

class GetAllUserController{
    async handler(request: Request, response: Response){
        const getAllUserService = new GetAllUserService();

        const users = await getAllUserService.execute(); 

        return response.status(200).json(users); 
    }
}

export {GetAllUserController} 