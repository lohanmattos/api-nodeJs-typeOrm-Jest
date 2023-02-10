import { Request, Response } from "express"
import { UpdateUserService } from "../Services/UpdateUserService";

class UpdateUserController {

    async handler(request: Request, response: Response){
        //Não existe esse propriedade no express. Precisa criar uma extensão
        //dos tipos do express em @types e configurar no tsconfig
        //const id = request.id;

        const updateUserService = new UpdateUserService();

        const {id, username, email} = request.body

        const nome = username;

        if(id.length === 0){
            return  response.status(400).json({
                mensagem:"Id não informado"
            })
        }

        if(username.length === 0){
            return  response.status(400).json({
                mensagem:"Informe um nome."
            })
        }

        await updateUserService.execute({
            id, nome, email
        })

        return response.status(204).json()

    }

}

export {UpdateUserController}