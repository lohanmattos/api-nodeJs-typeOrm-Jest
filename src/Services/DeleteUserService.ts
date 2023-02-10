import { getRepository } from "typeorm";
import { Users } from "../entities/User";


interface IUser{
    id: string;
}

class DeleteUserService{

    async execute({id}:IUser){
        const user = await getRepository(Users)
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where("id = :id", {id})
        .execute();

        console.log(user)
        return user.raw
    }

}

export {DeleteUserService}