import { getRepository } from "typeorm"
import { Users } from "../entities/User";

interface IUser {
    id: string;
    nome: string;
    email?: string;
}

class UpdateUserService {

    async execute({id, nome, email}: IUser){
        const user = await getRepository(Users)
        .createQueryBuilder()
        .update(Users)
        .set({
            nome: nome,
            email: email
        })
        .where("id = :id", {id})
        .execute();

        console.log(user)
        return user.raw;
    }
}

export {UpdateUserService}