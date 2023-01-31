import { Request, Response } from "express";

class CreateUserController {
    handler(req: Request, res:Response){
        return res.json({
            username:'Lohan'
        })
        
    }

}


export {CreateUserController}